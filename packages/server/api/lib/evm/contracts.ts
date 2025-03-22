import evmClient from "./client";
import { contractDefinitions } from "~shared";
import { getContract } from "viem";
import type { Address } from "viem";

const master = getContract({
    client: evmClient,
    ...contractDefinitions.PumpfaxtMaster,
});

const feeController = getContract({
    client: evmClient,
    ...contractDefinitions.PumpfaxtFeeController,
});

const relayManager = getContract({
    client: evmClient,
    ...contractDefinitions.RelayManager,
});

const frxUsd = getContract({
    client: evmClient,
    ...contractDefinitions.frxUsd,
});

const getPumpfaxtToken = (address: Address) =>
    getContract({
        client: evmClient,
        ...contractDefinitions.PumpfaxtToken,
        address,
    });

const contracts = { master, feeController, relayManager, frxUsd, getPumpfaxtToken };
export default contracts;
