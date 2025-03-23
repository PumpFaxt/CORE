import { z } from "zod";

export const zJsonStringSchema = z.string().refine((value) => {
    try {
        JSON.parse(value);
        return true;
    } catch (_) {
        return false;
    }
}).transform((value) => JSON.parse(value));
