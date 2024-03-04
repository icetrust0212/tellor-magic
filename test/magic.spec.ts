import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import fixture from "./fixture";
import { expect } from "chai";

describe("Tellor Magic", () => {
    it("Tellor Matic Test", async () => {
        const { owner, tellorMagic } = await loadFixture(fixture);

        expect(await tellorMagic.owner()).to.be.equal(owner.address);
        
    })
})