import * as Keychain from "react-native-keychain";
import {
    createSeedPhrase,
    getPublicKeyFromSeedPhraseBytes,
} from "./seedphrase";
import { getMessageSignedBySeedPhraseBytes } from "./signature";

const defaultService = "pumpfaxt-wallet-seedphrase";

const authenticationPrompts = {
    RETRIEVAL: {
        title: "Authenticate to access pumpfaxt",
        cancel: "No",
        description: "Please give",
        subtitle: "Biometrtic ser",
    },
    GENERATION: {
        title: "This is how you will be able to access pumpfaxt",
        cancel: "lol cancel",
        subtitle: "Set Login Method",
    },
};

async function clearExistingAndStoreSeedPhrase(seedPhrase: string) {
    try {
        await Keychain.resetGenericPassword();

        await Keychain.setGenericPassword(
            defaultService,
            seedPhrase,
            {
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
                accessControl:
                    Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
                authenticationPrompt: authenticationPrompts.GENERATION,
            },
        );
    } catch (error) {
        throw new Error("Error creating wallet, please inform devs: " + error);
    }
}

async function clearExistingAndCreateAndStoreNewSeedPhrase() {
    const seedPhrase = createSeedPhrase("english");

    await clearExistingAndStoreSeedPhrase(seedPhrase);
}

async function createNewSeedPhraseIfNeeded() {
    if (!(await doesSeedPhraseExist())) {
        await clearExistingAndCreateAndStoreNewSeedPhrase();
    }
}

async function doesSeedPhraseExist() {
    const services = await Keychain.getAllGenericPasswordServices();
    return services && (services.length > 0);
}

async function _useSeedPhrase(func: (seedBytes: Uint8Array) => Promise<any>) {
    const seedPhrase = await Keychain.getGenericPassword({
        authenticationPrompt: authenticationPrompts.RETRIEVAL,
    });
    if (!seedPhrase) throw new Error("No seed phrase found");

    const encoder = new TextEncoder();
    let seedBytes = encoder.encode(seedPhrase.password);

    try {
        return await func(seedBytes);
    } finally {
        seedBytes.fill(0);
    }
}

async function getPublicKeyAndCreateWalletIfNeeded() {
    await createNewSeedPhraseIfNeeded();
    async function _getPublicKeyAndCreateWalletIfNeeded(
        seedBytes: Uint8Array,
    ) {
        const pubKey = getPublicKeyFromSeedPhraseBytes(seedBytes);

        return pubKey;
    }

    const pubKey = await _useSeedPhrase(_getPublicKeyAndCreateWalletIfNeeded);
    return pubKey;
}

async function clearSeedPhraseIfExists() {
    if (await doesSeedPhraseExist()) {
        await Keychain.resetGenericPassword();
    }
}

async function getMessageSignedIfWalletExists(
    message: Parameters<typeof getMessageSignedBySeedPhraseBytes>[1],
) {
    if (!(await doesSeedPhraseExist())) {
        alert("Wallet does not exist");
    }

    async function _getMessageSignedIfWalletExists(
        seedBytes: Uint8Array,
    ) {
        const signature = getMessageSignedBySeedPhraseBytes(seedBytes, message);

        return signature;
    }

    const signature = await _useSeedPhrase(_getMessageSignedIfWalletExists);
    return signature;
}

async function UNSAFE_getSeedPhrase() {
    const retrievedSeedPhrase = await Keychain.getGenericPassword({
        authenticationPrompt: authenticationPrompts.RETRIEVAL,
    });
    if (!retrievedSeedPhrase) return null;
    return retrievedSeedPhrase.password;
}

export default {
    getPublicKeyAndCreateWalletIfNeeded,
    clearSeedPhraseIfExists,
    clearExistingAndCreateAndStoreNewSeedPhrase,
    getMessageSignedIfWalletExists,
    UNSAFE_getSeedPhrase,
};
