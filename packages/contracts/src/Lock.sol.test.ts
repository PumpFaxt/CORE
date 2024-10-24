import Lock from "../artifacts/src/Lock.sol/Lock.json" with { type: "json" }
import { type Address, parseGwei } from "viem"
import runtime from "../runtime.local.ts"
import { expect } from "@std/expect"

async function deployOneYearLockFixture() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60

  const lockedAmount = parseGwei("1")
  const unlockTime = (await runtime.block.time.latest()) +
    BigInt(ONE_YEAR_IN_SECS)

  const [owner, otherAccount] = runtime.clients

  const lock = await runtime.deployContract({
    abi: Lock.abi,
    bytecode: Lock.bytecode as Address,
    value: lockedAmount,
    args: [unlockTime],
  })

  const publicClient = runtime.publicClient

  return {
    lock,
    unlockTime,
    lockedAmount,
    owner,
    otherAccount,
    publicClient,
  }
}

Deno.test("Should set the right unlockTime", async () => {
  const { lock, unlockTime } = await runtime.loadFixture(
    deployOneYearLockFixture,
  )

  expect(await lock.read.unlockTime([])).toEqual(unlockTime)
})
