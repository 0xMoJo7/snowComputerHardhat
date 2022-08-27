require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

const POLYGON_INFURA_ENDPOINT = process.env.POLYGON_INFURA_ENDPOINT;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    polygon: {
      url: POLYGON_INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY],
      gas: "auto",
    },
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: { polygon: POLYGONSCAN_API_KEY }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 2000000,
  },
};
