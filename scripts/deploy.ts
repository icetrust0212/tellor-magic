import { ZeroAddress } from "ethers";
import { ethers, upgrades } from "hardhat";
import { USDC, USDT } from "./constants";
import { CHAINLINK_ETH_USDC_FEED } from "../test/fixture";

async function main() {
  const [deployer, feeReceiver] = await ethers.getSigners();

  // Deploy tellor
  const tellorMagic = await ethers.deployContract("TellorMagic");
  await tellorMagic.waitForDeployment();
  console.log("tellorMagic: ", await tellorMagic.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
