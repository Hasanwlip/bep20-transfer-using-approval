/**
 * transferFrom.js
 * -----------------------------------------------
 * ✅ Secure BEP-20 Token Transfer using Web3 & Node.js
 * ⚡ Uses `transferFrom` to move tokens from one wallet to another
 * 📌 Compatible with tokens like USDT, BUSD (on BSC or Ethereum)
 * 👨‍💻 Author: @hasanwlip
 */

require('dotenv').config(); // 🔐 Load environment variables
const Web3 = require('web3').default;
const BN = require('bn.js');

// ✅ RPC URL – Replace with your own RPC if needed
const web3 = new Web3("https://bsc-dataseed.binance.org/"); // ✅ BSC Mainnet
// const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_KEY"); // 👈 For Ethereum

// ✅ Minimal ABI for BEP-20/ERC-20 transferFrom and balanceOf
const tokenABI = [
  {
    constant: false,
    inputs: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [],
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  }
];

// ✅ Token Config – Replace with your actual data
const tokenAddress = "0x55d398326f99059fF775485246999027B3197955"; // USDT on BSC
const from = "0xSOURCE_WALLET_ADDRESS";       // Owner of tokens
const to = "0xRECEIVER_WALLET_ADDRESS";       // Receiver wallet
const spender = "0xSPENDER_WALLET_ADDRESS";   // Address with allowance
const privateKey = process.env.PRIVATE_KEY;   // 🔐 Load private key from .env

const contract = new web3.eth.Contract(tokenABI, tokenAddress);

(async () => {
  try {
    // ✅ Define the amount (e.g., 2 USDT = 2 * 10^18 if decimals = 18)
    const amount = web3.utils.toWei("2", 'ether'); // Adjust decimals if needed

    // 🛠️ Create transaction
    const tx = contract.methods.transferFrom(from, to, amount);
    const gas = await tx.estimateGas({ from: spender });
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();

    const txData = {
      to: tokenAddress,
      data,
      gas,
      gasPrice,
      from: spender
    };

    // 🔏 Sign and send transaction
    const signed = await web3.eth.accounts.signTransaction(txData, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

    console.log("✅ Transfer successful!");
    console.log("🔗 Tx Hash:", receipt.transactionHash);
  } catch (err) {
    console.error("❌ Error:", err.message || err);
  }
})();
