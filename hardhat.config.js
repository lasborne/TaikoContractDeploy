require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()

//const taiko_testnet = process.env.GOERLI_API_KEY
const deployerPrivateKey = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    taiko: {
        url: "https://rpc.jolnir.taiko.xyz",
        accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: {
        taiko: "42069",
    },
    customChains: [
        {
            network: "taiko",
            chainId: 167007,
            urls: {
                apiURL: "https://blockscoutapi.jolnir.taiko.xyz/api",
                browserURL: "https://explorer.jolnir.taiko.xyz",
            },
        },
    ],
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}