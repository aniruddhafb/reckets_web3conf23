require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      chainId: 80001,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
      url: "https://rpc.ankr.com/polygon_mumbai",
    },
  },
};
