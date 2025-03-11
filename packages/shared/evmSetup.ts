type Definition = {
    address?: string;
    abi: any;
};

let definitions: Record<string, Definition> = {};

const filePrefix = "export const contractDefinitions = ";
const fileSuffix = " as const;";
const filePath = __dirname +
    "/contractDefinitions.gen.ts";

async function syncDefsFromLocal() {
    const file = Bun.file(filePath);
    const text = await file.text();

    let abiContent = "{}";
    if (text.length > filePrefix.length + fileSuffix.length) {
        abiContent = text.slice(
            filePrefix.length,
            text.length - fileSuffix.length,
        );
    }

    try {
        definitions = JSON.parse(abiContent);
    } catch (e) {
        definitions = {};
    }
}

async function syncDefsToLocal() {
    await Bun.write(
        filePath,
        filePrefix + JSON.stringify(definitions, null, 2) + fileSuffix,
    );
}

export async function setDefinition(name: string, definition: Definition) {
    await syncDefsFromLocal();
    definitions[name] = definition;
    await syncDefsToLocal();
}

export async function clearDefinitions() {
    definitions = {};
    await syncDefsToLocal();
}

export async function setAddress(name: string, address: string) {
    await syncDefsFromLocal();
    if (!definitions[name]) throw new Error("contract abi not found");
    definitions[name].address = address;
    await syncDefsToLocal();
}
