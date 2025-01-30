import { SignableMessage } from "viem";
import { mnemonicToAccount } from "viem/accounts";

export async function getMessageSignedBySeedPhraseBytes(
    seedBytes: Uint8Array,
    message: SignableMessage,
) {
    const decoder = new TextDecoder();
    const account = mnemonicToAccount(decoder.decode(seedBytes));

    const signedMessage = await account.signMessage({ message });

    return signedMessage;
}
