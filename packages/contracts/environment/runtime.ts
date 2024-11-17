import crypto from "node:crypto";
import environmentConfig from "../environment.config.ts";

import * as viem from "viem";
import * as chains from "viem/chains";
import type { Address, Hash } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import {
  abi as abiDefinitions,
  bytecode as bytecodeDefinitions,
} from "../definitions.gen.ts";
import { expect } from "@std/expect";
import environmentState_ from "./environment.tmp.json" with { type: "json" };

// deno-lint-ignore no-explicit-any
const environmentState = environmentState_ as any;

const { currentNetwork } = environmentState;

let currentChain = environmentConfig.networks.custom[currentNetwork];
if (!currentChain) {
  // @ts-ignore: Dumb, can't read JSON as const
  currentChain = chains[currentNetwork];
}

const transport = viem.http(currentChain.rpcUrls.default.http.at(0));

const clients = [];
for (const key of environmentConfig.accounts) {
  const account = privateKeyToAccount(key);
  clients.push(
    viem
      .createWalletClient({ account, transport, chain: currentChain })
      .extend(viem.publicActions),
  );
}

const publicClient = viem.createPublicClient({
  transport,
  chain: currentChain,
});

const deployer = clients[0];

const networkAdmin = viem
  .createTestClient({
    mode: "anvil",
    transport: viem.http(),
    chain: currentChain,
  })
  .extend(viem.walletActions)
  .extend(viem.publicActions);

type Fixture<T> = () => Promise<T>;
type Snapshot<T> = { id: Address; data: T };

const snapshots: Record<string, Snapshot<unknown>> = {};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadFixture<T>(fixture: Fixture<T>): Promise<T> {
  const fnHash = crypto
    .createHash("sha256")
    .update(fixture.toString())
    .digest("hex");

  if (snapshots[fnHash] === undefined) {
    const data = await fixture();
    const snapshotId = await networkAdmin.snapshot();
    snapshots[fnHash] = { id: snapshotId, data: data };

    return data;
  } else {
    const snapshot = snapshots[fnHash];
    await networkAdmin.revert({ id: snapshot.id });
    const snapshotId = await networkAdmin.snapshot();
    snapshots[fnHash].id = snapshotId;
    const data = snapshot.data;
    return data as T;
  }
}

async function getNetworkLatestTime(): Promise<bigint> {
  const latestBlock = await networkAdmin.getBlock();

  return latestBlock.timestamp;
}

const time = {
  increase: networkAdmin.increaseTime,
  latest: getNetworkLatestTime,
};

async function mineOne() {
  await networkAdmin.mine({ blocks: 1 });
}
const block = { time, mine: networkAdmin.mine, mineOne };

async function tx(txn: Promise<Hash>) {
  await sleep(5);
  return await publicClient.getTransactionReceipt({
    hash: await txn,
  });
}

async function deployContract<
  C extends keyof typeof abiDefinitions & keyof typeof bytecodeDefinitions,
  T extends Parameters<
    typeof deployer.deployContract<(typeof abiDefinitions[C]), viem.Chain>
  >["0"],
>(
  contractName: C,
  args: T["args"],
  parameters?: Omit<T, "bytecode" | "abi">,
) {
  const txnRcpt = await tx(
    deployer.deployContract({
      abi: abiDefinitions[contractName],
      bytecode: bytecodeDefinitions[contractName],
      args: args,
      ...parameters,
      // deno-lint-ignore no-explicit-any
    } as any),
  );

  if (!txnRcpt.contractAddress) throw new Error("Failed to deploy contract");

  const contract = viem.getContract({
    abi: abiDefinitions[contractName],
    address: txnRcpt.contractAddress,
    client: deployer,
  });

  return contract;
}

function getContract<
  C extends keyof typeof abiDefinitions & keyof typeof bytecodeDefinitions,
>(
  contractName: C,
  address: Address,
) {
  const contract = viem.getContract({
    abi: abiDefinitions[contractName],
    address: address,
    client: deployer,
  });

  return contract;
}

async function expectContractFunctionExecutionError(
  fn: Promise<unknown>,
  expectedErrorMessage?: string,
) {
  let actualErrorMessage: string | null = null;
  await fn.catch(
    (err) => {
      if (
        err.name === "ContractFunctionExecutionError" &&
        err.shortMessage
      ) {
        actualErrorMessage = err.shortMessage;
      }
    },
  ).finally(() => {
    expect(actualErrorMessage).toContain(expectedErrorMessage || "");
  });
}

async function readContractEvents<
  C extends Readonly<ReturnType<typeof deployContract>>,
  E extends viem.ContractEventName<C["abi"]>,
>(
  contract: C,
  eventName: E,
  params?: Omit<
    viem.GetContractEventsParameters<C["abi"]>,
    "abi" | "address" | "eventName"
  >,
) {
  const logs = await publicClient.getContractEvents({
    abi: contract.abi,
    address: contract.address,
    eventName,
    // deno-lint-ignore no-explicit-any
    ...params as any,
  });

  return logs as viem.GetContractEventsReturnType<C["abi"], E>;
}

const runtime = {
  clients,
  publicClient,
  loadFixture,
  block,
  deployContract,
  readContractEvents,
  getContract,
  sleep,
  expectContractFunctionExecutionError,
};

export default runtime;
