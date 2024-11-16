import runtime from "../environment/runtime.ts";
import { expect } from "@std/expect";

async function deployFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const list = await runtime.deployContract("AuxillaryList", []);

  const publicClient = runtime.publicClient;

  await list.write.add([owner.account.address]);

  return {
    owner,
    acc1,
    acc2,
    list,
    publicClient,
  };
}

// Deployment

Deno.test("Should set deployer as owner", async () => {
  const { owner, list } = await runtime.loadFixture(
    deployFixture,
  );

  expect(await list.read.owner())
    .toBe(owner.account.address);
});

// Element Addition

Deno.test("Should allow owner to add elements", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
});

Deno.test("Should increment length on element addition", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  const initialLength = await list.read.length();
  await list.write.add([acc1.account.address]);

  expect(await list.read.length()).toBe(initialLength + 1n);
});

Deno.test("Should return indexOf newly added element", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  const initialLength = await list.read.length();
  await list.write.add([acc1.account.address]);

  expect(await list.read.indexOf([acc1.account.address])).toBe(initialLength);
});

Deno.test("Should contain the newly added element", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);

  expect(await list.read.contains([acc1.account.address])).toBeTruthy();
});

Deno.test("Should not allow non owner to add elements", async () => {
  const { acc1, acc2, list } = await runtime.loadFixture(
    deployFixture,
  );

  await runtime.expectContractFunctionExecutionError(
    list.write.add([acc1.account.address], { account: acc2.account }),
  );
});

// Element Deletion

Deno.test("Should allow owner to remove elements", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
  await list.write.remove([acc1.account.address]);
});

Deno.test("Should decrement length on element deletion", async () => {
  const { owner, list } = await runtime.loadFixture(
    deployFixture,
  );

  const initialLength = await list.read.length();
  await list.write.remove([owner.account.address]);

  expect(await list.read.length()).toBe(initialLength - 1n);
});

Deno.test("Should delete indexOf deleted element", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);

  await list.write.remove([acc1.account.address]);

  expect(await list.read.indexOf([acc1.account.address])).toBe(0n);
});

Deno.test("Should not contain the deleted element", async () => {
  const { owner, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.remove([owner.account.address]);

  expect(await list.read.contains([owner.account.address])).toBeFalsy();
});

Deno.test("Should not allow non owner to remove elements", async () => {
  const { acc1, acc2, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
  await runtime.expectContractFunctionExecutionError(
    list.write.remove([acc1.account.address], { account: acc2.account }),
  );
});

// Functionality

Deno.test("Should not allow duplicate entries when using safeAdd", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
  await runtime.expectContractFunctionExecutionError(
    list.write.safeAdd([acc1.account.address]),
    "Address already exists",
  );
});

Deno.test("Should accept duplicate entries when using add without modifying list", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
  const initialLength = await list.read.length();
  await list.write.add([acc1.account.address]);

  expect(await list.read.length()).toBe(initialLength);
});

Deno.test("Should revert when removing non existant entry with safeRemove", async () => {
  const { acc1, list } = await runtime.loadFixture(
    deployFixture,
  );

  await runtime.expectContractFunctionExecutionError(
    list.write.safeRemove([acc1.account.address]),
    "Address does not exist",
  );
});

Deno.test("Should accept non existant entry when using remove without modifying list", async () => {
  const { acc1, acc2, list } = await runtime.loadFixture(
    deployFixture,
  );

  await list.write.add([acc1.account.address]);
  const initialLength = await list.read.length();
  await list.write.remove([acc2.account.address]);

  expect(await list.read.length()).toBe(initialLength);
});

Deno.test("Should return all elements array", async () => {
  const { owner, acc1, list } = await runtime.loadFixture(deployFixture);

  await list.write.add([acc1.account.address]);
  const resultList = await list.read.getAll();

  expect(JSON.stringify(resultList)).toBe(JSON.stringify([
    owner.account.address,
    acc1.account.address,
  ]));
});
