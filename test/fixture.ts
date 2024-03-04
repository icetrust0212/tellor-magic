import { ethers } from "hardhat";

async function fixture() {
    const [owner, feeReceiver, ...users] = await ethers.getSigners();

    // Deploy Tellor Magic 
    const tellorMagic = await ethers.deployContract("TellorMagic", []);
    await tellorMagic.waitForDeployment();

    return { owner, feeReceiver, users, tellorMagic }
}

export default fixture;