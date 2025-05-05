<p align="center">
  <img src="https://img.shields.io/badge/Made%20by-Hasanwlip-black?style=for-the-badge&logo=github" />
</p>

# 🟢 BEP-20 Transfer Using Approval

Securely transfer approved BEP-20/ERC-20 tokens using `transferFrom()` with Web3.js. Perfect for handling delegated token transfers on-chain.

---

## 📦 Features

* ✅ Supports **BEP-20** (Binance Smart Chain) and **ERC-20** (Ethereum) tokens
* 🔐 Uses spender’s private key securely
* 🧩 Handles `transferFrom()` after prior `approve()`
* ⚙️ Easily switch networks by changing the RPC URL
* 🛡️ Clean and production-ready JavaScript (Node.js)

---

## 🛠 Built With

| Tool      | Description                                       |
| --------- | ------------------------------------------------- |
| `web3.js` | Web3 library for interacting with BSC or Ethereum |
| `Node.js` | Runtime for executing JavaScript                  |

---

## 📁 File Structure

```
📦 bep20-transfer-using-approval
 ┣ 📜 transferFrom.js       # Main script for token transfer
 ┗ 📜 README.md             # Project documentation
```

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/hasanwlip/bep20-transfer-using-approval.git
cd bep20-transfer-using-approval
```

### 2. Install dependencies

```bash
npm install web3 bn.js
```

### 3. Edit configuration

Open `transferFrom.js` and set:

* ✅ Token contract address
* ✅ `from`, `to`, and `spender` addresses
* ✅ Private key of the spender (safely)

### 4. Run

```bash
node transferFrom.js
```

---

## 🌐 Network Support

| Network     | RPC URL                                 |
| ----------- | --------------------------------------- |
| BSC Mainnet | `https://bsc-dataseed.binance.org/`     |
| Ethereum    | `https://mainnet.infura.io/v3/YOUR_KEY` |

To switch to Ethereum, just change the RPC URL and make sure the token contract address matches the ERC-20 version.

---

## ✅ Security Tip

Never hardcode private keys in production. Use environment variables or vaults for sensitive data.

```bash
export PRIVATE_KEY=your_key_here
```

Then use `process.env.PRIVATE_KEY` in your code.

---

## 🧠 About

This repo was created by [@hasanwlip](https://github.com/hasanwlip) to help developers simplify token transfers using approvals securely and efficiently.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
