import crypto from "node:crypto"
import * as viem from "viem"
import type { Address, Hash } from "viem"
import { hardhat as hardhatNetwork } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"

const hardhatNodeAccounts = [
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
  "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
] as const

const transport = viem.http(hardhatNetwork.rpcUrls.default.http.at(0))

const clients = []
for (const key of hardhatNodeAccounts) {
  const account = privateKeyToAccount(key)
  clients.push(
    viem
      .createWalletClient({ account, transport, chain: hardhatNetwork })
      .extend(viem.publicActions),
  )
}

const publicClient = viem.createPublicClient({
  transport,
  chain: hardhatNetwork,
})

const deployer = clients[0]

const networkAdmin = viem
  .createTestClient({
    mode: "hardhat",
    transport: viem.http(),
    chain: hardhatNetwork,
  })
  .extend(viem.walletActions)
  .extend(viem.publicActions)

type Fixture<T> = () => Promise<T>
type Snapshot<T> = { id: Address; data: T }

const snapshots: Record<string, Snapshot<unknown>> = {}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function loadFixture<T>(fixture: Fixture<T>): Promise<T> {
  const fnHash = crypto
    .createHash("sha256")
    .update(fixture.toString())
    .digest("hex")

  if (snapshots[fnHash] === undefined) {
    const data = await fixture()
    const snapshotId = await networkAdmin.snapshot()
    snapshots[fnHash] = { id: snapshotId, data: data }

    return data
  } else {
    const snapshot = snapshots[fnHash]
    await networkAdmin.revert({ id: snapshot.id })

    const data = await snapshot.data
    return data as T
  }
}

async function getNetworkLatestTime(): Promise<bigint> {
  const latestBlock = await networkAdmin.getBlock()

  return latestBlock.timestamp
}

const time = {
  increase: networkAdmin.increaseTime,
  latest: getNetworkLatestTime,
}

async function mineOne() {
  await networkAdmin.mine({ blocks: 1 })
}
const block = { time, mine: networkAdmin.mine, mineOne }

async function tx(txn: Promise<Hash>) {
  await sleep(5)
  return await publicClient.getTransactionReceipt({
    hash: await txn,
  })
}

async function deployContract(
  parameters: Parameters<typeof deployer.deployContract>[0],
) {
  const txnRcpt = await tx(deployer.deployContract(parameters))

  if (!txnRcpt.contractAddress) throw new Error("Failed to deploy contract")

  const contract = viem.getContract({
    abi: parameters.abi,
    address: txnRcpt.contractAddress,
    client: deployer,
  })

  return contract
}

const runtime = {
  clients,
  publicClient,
  loadFixture,
  block,
  deployContract,
  sleep,
}

export default runtime
