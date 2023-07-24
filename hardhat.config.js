require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      chainId: 80001,
      accounts: [
        "1094021a53ea961fffc4b689bbbc92c3c861c84b4c8e6753cd40f45d5b80be59",
      ],
      url: "https://rpc.ankr.com/polygon_mumbai",
    },
  },
};
