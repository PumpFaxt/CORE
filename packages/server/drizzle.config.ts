import { defineConfig } from "drizzle-kit";
import env from "./env";

export default defineConfig({
    out: "./drizzle",
    schema: "./api/lib/db/schema",
    dialect: "sqlite",
    dbCredentials: {
        url: env.DB_FILE_NAME,
    },
});
