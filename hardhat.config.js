module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },

  etherscan : {
    apikey : process.env.POLYGONSCAN_API_KEY
  }
};