import {
    MMKV,
    useMMKVBoolean,
    useMMKVBuffer,
    useMMKVNumber,
    useMMKVObject,
    useMMKVString,
} from "react-native-mmkv";

const storage = new MMKV();

type STORAGESTRINGTYPE = {
    "boolean": ReturnType<typeof useMMKVBoolean>;
    "number": ReturnType<typeof useMMKVNumber>;
    "string": ReturnType<typeof useMMKVString>;
};

const storageDef = {
    "user.has_been_welcomed": "boolean",
    "user.app_open_count": "number",
    "user.address": "string",
} as const;

export function usePersistentStorage<
    T extends keyof typeof storageDef,
>(
    key: T,
): STORAGESTRINGTYPE[typeof storageDef[T]] {
    const type = storageDef[key];

    if (isBooleanString(type)) {
        return useMMKVBoolean(key) as any;
    }
    if (isNumberString(type)) {
        return useMMKVNumber(key) as any;
    }
    if (isStringString(type)) {
        return useMMKVString(key) as any;
    }
    throw new Error("unknown storage type");
}

function isBooleanString(
    type: typeof storageDef[keyof typeof storageDef],
): type is "boolean" {
    return type === "boolean";
}

function isNumberString(
    type: typeof storageDef[keyof typeof storageDef],
): type is "number" {
    return type === "number";
}

function isStringString(
    type: typeof storageDef[keyof typeof storageDef],
): type is "string" {
    return type === "string";
}
