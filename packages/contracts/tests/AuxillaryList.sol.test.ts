import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("AuxillaryList", function () {
  async function deployFixture() {
    const [owner, acc1, acc2] = await hre.viem.getWalletClients();
    const list = await hre.viem.deployContract("AuxillaryList", []);

    const publicClient = await hre.viem.getPublicClient();

    await list.write.add([owner.account.address]);

    return {
      list,
      owner,
      acc1,
      acc2,
      publicClient,
    };
  }

  describe("Deployment", () => {
    it("Should set deployer as owner", async () => {
      const { owner, list } = await loadFixture(deployFixture);

      expect((await list.read.owner()).toLowerCase()).eq(
        owner.account.address,
      );
    });
  });

  describe("Element Addition", () => {
    it("Should allow owner to add elements", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
    });

    it("Should increment length on element addition", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      const initialLength = await list.read.length();
      await list.write.add([acc1.account.address]);

      expect(await list.read.length()).eq(initialLength + 1n);
    });

    it("Should return indexOf newly added element", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      const initialLength = await list.read.length();
      await list.write.add([acc1.account.address]);

      expect(await list.read.indexOf([acc1.account.address])).eq(
        initialLength,
      );
    });

    it("Should contain the newly added element", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);

      expect(await list.read.contains([acc1.account.address])).to.true;
    });

    it("Should not allow non owner to add elements", async () => {
      const { acc1, acc2, list } = await loadFixture(
        deployFixture,
      );

      await expect(
        list.write.add([acc1.account.address], {
          account: acc2.account,
        }),
      ).to.be.rejected;
    });
  });

  describe("Element Deletion", () => {
    it("Should allow owner to remove elements", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
      await list.write.remove([acc1.account.address]);
    });

    it("Should decrement length on element deletion", async () => {
      const { owner, list } = await loadFixture(
        deployFixture,
      );

      const initialLength = await list.read.length();
      await list.write.remove([owner.account.address]);

      expect(await list.read.length()).eq(initialLength - 1n);
    });

    it("Should delete indexOf deleted element", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);

      await list.write.remove([acc1.account.address]);

      expect(await list.read.indexOf([acc1.account.address])).eq(0n);
    });

    it("Should not contain the deleted element", async () => {
      const { owner, list } = await loadFixture(
        deployFixture,
      );

      await list.write.remove([owner.account.address]);

      expect(await list.read.contains([owner.account.address])).to.false;
    });

    it("Should not allow non owner to remove elements", async () => {
      const { acc1, acc2, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
      await expect(
        list.write.remove([acc1.account.address], { account: acc2.account }),
      ).to.be.rejected;
    });
  });

  describe("Functionality", () => {
    it("Should not allow duplicate entries when using safeAdd", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
      await expect(list.write.safeAdd([acc1.account.address])).to.be.rejected;
    });

    it("Should accept duplicate entries when using add without modifying list", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
      const initialLength = await list.read.length();
      await list.write.add([acc1.account.address]);

      expect(await list.read.length()).eq(initialLength);
    });

    it("Should revert when removing non existant entry with safeRemove", async () => {
      const { acc1, list } = await loadFixture(
        deployFixture,
      );

      await expect(list.write.safeRemove([acc1.account.address])).to.be
        .rejected;
    });

    it("Should accept non existant entry when using remove without modifying list", async () => {
      const { acc1, acc2, list } = await loadFixture(
        deployFixture,
      );

      await list.write.add([acc1.account.address]);
      const initialLength = await list.read.length();
      await list.write.remove([acc2.account.address]);

      expect(await list.read.length()).eq(initialLength);
    });

    it("Should return all elements array", async () => {
      const { owner, acc1, list } = await loadFixture(deployFixture);

      await list.write.add([acc1.account.address]);
      const resultList = await list.read.getAll();

      expect(JSON.stringify(resultList).toLowerCase()).eq(JSON.stringify([
        owner.account.address,
        acc1.account.address,
      ]).toLowerCase());
    });
  });
});
