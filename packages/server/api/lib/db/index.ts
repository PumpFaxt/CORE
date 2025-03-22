import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import schema from "./schema";
import env from "../../../env";

const sqlite = new Database(env.DB_FILE_NAME!);
const db = drizzle({ client: sqlite, schema: schema, casing: "snake_case" });

export default db;
