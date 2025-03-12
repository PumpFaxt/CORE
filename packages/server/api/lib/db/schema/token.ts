import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { timestamps } from "./helpers";

export const Tokens = table("tokens", {
    id: t.int().notNull().primaryKey({ autoIncrement: true }),
    address: t.text({ length: 42 }).notNull(),
    creator: t.text({ length: 42 }).notNull(),
    name: t.text().notNull(),
    description: t.text(),
    imageUrl: t.text(),
    ...timestamps,
}, (table) => [
    t.uniqueIndex("creator_idx").on(table.creator),
]);
