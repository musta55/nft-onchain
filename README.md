# Make NFTs with On-Chain Metadata

This project demonstrates 
  1. How to store NFTs metadata on chain
  2. What is Polygon and why it's important to lower Gas fees.
  3. How to deploy on Polygon Mumbai
  4. How to process and store on-chain SVG images and JSON objects
  5. How to modify your metadata based on your interactions with the NFT

Try running some of the following tasks:

```shell
npm i
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node


Deploy your contract to polygon testnet

npx hardhat run scripts/deploy.js --network mumbai
verify your smart contract in polygon mumbai testnet: 
npx hardhat verify --network mumbai <contract address>


This will return contract address
```
