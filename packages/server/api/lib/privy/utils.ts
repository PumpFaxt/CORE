import { Context } from "hono";
import privyClient from "./client";

export async function getPrivyUserFromContext(ctx: Context) {
    const accessToken = ctx.req.header("Authorization")?.replace("Bearer ", "");
    if (!accessToken) return null;
    try {
        const { userId } = await privyClient.verifyAuthToken(accessToken);
        return await privyClient.getUserById(userId);
    } catch (_) {
        return null;
    }
}
