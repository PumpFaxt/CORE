import { Hono } from "hono";
import contracts from "../lib/evm/contracts";
import evmClient from "../lib/evm/client";
import db from "../lib/db";
import { tokens } from "../lib/db/schema/token";
import ensureUser from "../middlewares/ensureUser";
import s3 from "../lib/s3/client";
import sharp from "sharp";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { zJsonStringSchema } from "../lib/utils";

const app = new Hono()
    .get("/", async (ctx) => {
        const results = await db.select().from(tokens).orderBy(tokens.createdAt)
            .limit(50);

        return ctx.json({ tokens: results });
    })
    .post(
        "/new",
        ensureUser,
        zValidator(
            "form",
            z.object({
                req: zJsonStringSchema,
                description: z.string(),
                image: z.instanceof(File),
            }),
        ),
        async (ctx) => {
            const { user } = ctx.var;
            const { req, description, image } = ctx.req
                .valid("form");

            const { 0: creator, 1: name, 2: symbol } = req;

            if (creator !== user.address) {
                return ctx.text("Privy User not same as txn request", 401);
            }

            try {
                const txnHash = await contracts.master.write.metaLaunchToken(
                    req,
                );
                const { logs: txnLogs } = await evmClient.public
                    .getTransactionReceipt({
                        hash: txnHash,
                    });
                const { address } = txnLogs[2];

                const imageBuffer = await image.arrayBuffer();
                const imageKey = `token-images/${address}.webp`;

                const optimizedImage = await sharp(Buffer.from(imageBuffer))
                    .resize({ width: 384, height: 384, fit: "inside" })
                    .webp({ quality: 80 })
                    .toBuffer();

                const s3file = s3.file(imageKey);

                await s3file.write(optimizedImage);

                await db.insert(tokens).values({
                    address,
                    name,
                    symbol,
                    description,
                    imageUrl:
                        "https://pub-9811e3cb27434c9595e2c1371b164905.r2.dev/" +
                        imageKey,
                    creator: user.id,
                });

                return ctx.json({
                    message: "Token Launched",
                    address: address,
                }, 201);
            } catch (e) {
                console.log(e);
                return ctx.text("Error launching token", 500);
            }
        },
    );

export default app;
