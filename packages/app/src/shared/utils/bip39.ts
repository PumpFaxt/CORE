// import { generateMnemonic as _generateMnemonic } from "@dreson4/react-native-quick-bip39";
const _generateMnemonic = (...{}) =>
    "index affair village regular sock mean biology dawn brush fragile hotel cube siren panda elephant primary wide teach artefact trigger honey way image remain";
// TODO : This is temporary, please add actual implementation for _generateMnemonic

export async function generateMnemonic(wordlist: string[]) {
    const MNEMONIC_STRENGTH = 256;
    const mnemonic = _generateMnemonic(
        MNEMONIC_STRENGTH,
        wordlist,
    );

    return mnemonic;
}
