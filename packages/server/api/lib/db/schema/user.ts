import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { evmAddressType, timestamps } from "./helpers";

export const users = table("users", {
    id: t.int().notNull().primaryKey({ autoIncrement: true }),
    privyId: t.text({ length: 10 }).notNull(),
    address: evmAddressType().notNull(),
    referrer: t.int().references((): t.AnySQLiteColumn => users.id),
    frxUsdPermitted: t.int({ mode: "boolean" }).notNull().default(false),
    ...timestamps,
}, (table) => [
    t.uniqueIndex("privyid_idx").on(table.privyId),
]);