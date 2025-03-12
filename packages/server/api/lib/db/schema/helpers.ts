import { sql } from "drizzle-orm";
import { integer } from "drizzle-orm/sqlite-core";

export const timestamps = {
    createdAt: integer({ mode: "timestamp" }).default(
        sql`CURRENT_TIMESTAMP`,
    ),
    deleted_at: integer({ mode: "timestamp" }),
};
