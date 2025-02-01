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

const storageDef: Record<string, keyof STORAGESTRINGTYPE> = {
    "user.has_been_welcomed": "boolean",
} as const;

export function usePersistentStorage(key: undefined): typeof storage;
export function usePersistentStorage<T extends keyof typeof storageDef>(
    key: T,
): STORAGESTRINGTYPE[(typeof storageDef)[T]];

export function usePersistentStorage<T extends keyof typeof storageDef>(
    key: T | undefined,
): typeof storage | STORAGESTRINGTYPE[(typeof storageDef)[T]] {
    if (key === undefined) {
        return storage;
    }

    const type = storageDef[key];
    switch (type) {
        case "boolean":
            return useMMKVBoolean(key, storage);
        case "number":
            return useMMKVNumber(key, storage);
        case "string":
            return useMMKVString(key, storage);
        default:
            throw new Error("unknown storage type");
    }
}
