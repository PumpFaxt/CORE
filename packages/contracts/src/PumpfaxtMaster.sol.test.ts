import runtime from "../runtime.local.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";

async function deployFixture() {
    const { master, owner, acc1, acc2, adminRegistry } = await runtime
        .loadFixture(
            setupFixture,
        );

    return {
        owner,
        acc1,
        acc2,
        master,
        adminRegistry
    };
}

// Deployment

Deno.test("Should register deployer as an Admin", async () => {
    const { owner, adminRegistry } = await deployFixture();
    expect(await adminRegistry.read.isAdmin([owner.account.address]))
        .toBeTruthy();
});

