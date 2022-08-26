require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const KOVAN_INFURA_ENDPOINT = process.env.KOVAN_INFURA_ENDPOINT;
const RINKEBY_INFURA_ENDPOINT = process.env.RINKEBY_INFURA_ENDPOINT;
const MAINNET_INFURA_ENDPOINT = process.env.MAINNET_INFURA_ENDPOINT;
const POLYGON_INFURA_ENDPOINT = process.env.POLYGON_INFURA_ENDPOINT;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;
const GAS_REPORTER_KEY = process.env.GAS_REPORTER_KEY;

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    kovan: {
      url: KOVAN_INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2],
    },
    rinkeby: {
      url: RINKEBY_INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2],
      gas: "auto",
    },
    mainnet: {
      url: MAINNET_INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2],
      gas: "auto",
    },
    polygon: {
      url: POLYGON_INFURA_ENDPOINT,
      accounts: [PRIVATE_KEY1, PRIVATE_KEY2],
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
    apiKey: { rinkeby: ETHERSCAN_API_KEY,
              mainnet: ETHERSCAN_API_KEY }
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
  gasReporter: {
    currency: "usd",
    gasPrice: 50,
    coinmarketcap: GAS_REPORTER_KEY,
  },
};

