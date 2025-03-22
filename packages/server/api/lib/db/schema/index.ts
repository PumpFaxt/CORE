import * as user from "./user";
import * as token from "./token";

const schema = {
    ...user,
    ...token,
};

export default schema;

export type DBSchema = typeof schema;
export type DB = {
    [K in keyof DBSchema as K extends `${infer Base}s` ? Base : K]: DBSchema[K]["$inferSelect"];
};
