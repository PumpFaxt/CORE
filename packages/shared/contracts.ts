import * as viem from "viem";
import contractDefinitions from "./contractDefinitions.gen";

export function getMaster(client: viem.Client) {
    return viem.getContract(
        { ...contractDefinitions.PumpfaxtMaster, client },
    );
}

export function getFeeController(client: viem.Client) {
    return viem.getContract(
        { ...contractDefinitions.PumpfaxtFeeController, client },
    );
}

export function getFrxUsd(client: viem.Client) {
    return viem.getContract(
        { ...contractDefinitions.frxUsd, client },
    );
}

export function getPumpfaxtToken(client: viem.Client, address: viem.Address) {
    return viem.getContract(
        { ...contractDefinitions.PumpfaxtToken, client, address },
    );
}
