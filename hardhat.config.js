/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
const ALCHAMY_API_KEY="PNVwB9vJZIKatHvtPlGFf2kh_5SPEboy";
const ROPSTEN_PRIVATE_KEY="";

module.exports = {
  solidity: "0.8.9",
  network:{
    ropsten:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHAMY_API_KEY}`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`],
    },
  }
};
