import { sql } from "drizzle-orm";
import { customType, integer } from "drizzle-orm/sqlite-core";
import { getAddress, isAddress } from "viem";

export const timestamps = {
    createdAt: integer().notNull().$default(() => Date.now()),
    deletedAt: integer(),
};

export const evmAddressType = customType<{
    data: string;
    driverData: string;
}>({
    dataType() {
        return "text";
    },
    toDriver(value) {
        if (!isAddress(value)) {
            throw new Error(`Invalid Ethereum address: ${value}`);
        }
        return getAddress(value);
    },
    fromDriver(value) {
        return value;
    },
});
