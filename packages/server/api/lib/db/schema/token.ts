import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { evmAddressType, timestamps } from "./helpers";
import { users } from "./user";

export const tokens = table("tokens", {
    id: t.int().notNull().primaryKey({ autoIncrement: true }),
    address: evmAddressType().notNull(),
    creator: t.int().references((): t.AnySQLiteColumn => users.id).notNull(),
    name: t.text().notNull(),
    symbol: t.text().notNull(),
    description: t.text(),
    imageUrl: t.text(),
    ...timestamps,
}, (table) => [
    t.uniqueIndex("creator_idx").on(table.creator),
]);
