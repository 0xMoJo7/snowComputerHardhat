// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you"ll find the Hardhat
// Runtime Environment"s members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Arrow = await hre.ethers.getContractFactory("Arrow");
  arrow = await Arrow.deploy();
  
  await arrow.deployed();
  console.log(arrow.address);

  await new Promise((resolve) => setTimeout(resolve, 30000));
  try {
    await hre.run("verify:verify", {
      address: arrow.address,
      constructorArguments: [],
    });
    console.log("verified");
  } catch (e) {
    console.log(e);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

