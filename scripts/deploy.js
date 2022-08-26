// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you"ll find the Hardhat
// Runtime Environment"s members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Sprite = await hre.ethers.getContractFactory("Sprite");
  sprite = await Sprite.deploy();
  
  await sprite.deployed();
  console.log(sprite.address);

  await new Promise((resolve) => setTimeout(resolve, 60000));
  try {
    await hre.run("verify:verify", {
      address: sprite.address,
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

