const hre = require("hardhat");

async function main() {
  const OurNFTContract = await hre.ethers.getContractFactory("OurNFTContract");
  const ourNftContract = await OurNFTContract.deploy(414);

  await ourNftContract.deployed();

  console.log("Contract deployed to:", ourNftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
