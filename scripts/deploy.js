

async function main() {
  const ERC721Verifier = await ethers.getContractFactory("ERC721Verifier");
  const erc721Verifier = await ERC721Verifier.deploy();

  await erc721Verifier.deployed();
  console.log("deployed to: ", erc721Verifier.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });