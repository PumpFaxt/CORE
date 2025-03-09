import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import * as viem from "viem";
import { setupFixture } from "./~setupFixture";
import { metaTxRequest } from "~shared";

describe("RelayManager", function () {
    async function deployFixture() {
        const { owner, relayManager, master, acc1 } = await loadFixture(
            setupFixture,
        );

        return {
            owner,
            relayManager,
            master,
            acc1,
        };
    }

    describe("Execution & Nonce Validation", () => {
        it("Should increase the nonce after execution", async () => {
            const { owner, relayManager, master } = await loadFixture(
                deployFixture,
            );

            const nonce = await relayManager.read.getNonce();

            const req = await metaTxRequest({
                signer: owner,
                functionName: "launchToken",
                args: [
                    ["string", "string", "string"],
                    [
                        "test",
                        "test",
                        "ipfs://test",
                    ] as const,
                ],
                nonce,
            });

            await master.write.metaLaunchToken(req);

            expect(await relayManager.read.getNonce()).eq(nonce + 1n);
        });
    });
});
