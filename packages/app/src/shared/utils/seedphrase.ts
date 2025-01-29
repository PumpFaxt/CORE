import { english, generateMnemonic, mnemonicToAccount } from "viem/accounts";

const MNEMONIC_LANGUAGES = { english };

export function createSeedPhrase(language: keyof typeof MNEMONIC_LANGUAGES) {
    try {
        const mnemonic = generateMnemonic(MNEMONIC_LANGUAGES[language]);

        return mnemonic;
    } catch (error) {
        throw new Error("Error creating wallet, please inform devs: " + error);
    }
}


export function getPublicKeyForSeedPhrase(seedPhrase: string) {
    const { address } = mnemonicToAccount(seedPhrase);

    return address.toString();
}

export function getPublicKeyFromSeedPhraseBytes(seedBytes: Uint8Array) {
    const decoder = new TextDecoder();
    const { address } = mnemonicToAccount(decoder.decode(seedBytes));

    return address.toString();
}
