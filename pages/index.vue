<template>
  <div class="login-container">
    <button v-if="!isLoggedIn" @click="login" class="login-btn">Login</button>
    <div v-else class="actions-container">
      <div class="action">
        <input
          v-model="message"
          type="text"
          placeholder="Enter a message to sign"
          class="input"
        />
        <button @click="signMessage" class="action-btn">Sign Message</button>
      </div>
      <div class="action">
        <input
          v-model.number="amount"
          type="number"
          placeholder="Enter amount to send"
          class="input"
        />
        <input
          v-model="recipientAddress"
          type="text"
          placeholder="Enter recipient address"
          class="input"
        />
        <button @click="sendTransaction" class="action-btn">
          Send Transaction
        </button>
      </div>
      <div class="action">
        <button @click="writeContract" class="action-btn">
          Write Contract
        </button>
        <button @click="readContract" class="action-btn">Read Contract</button>
      </div>
      <div class="action">
        <button @click="disconnect" class="action-btn">Disconnect</button>
      </div>
      <div class="action">
        <button @click="getAccountInfo" class="action-btn">Get Account</button>
      </div>
      <div class="action">
        <button @click="getBalance" class="action-btn">Get Balance</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      message: "",
      amount: 0,
      recipientAddress: "",
      account: null,
    };
  },
  mounted() {
    this.checkLoginStatus();
    this.getAccountInfo();
    this.logoutListen();
    this.loginListen();
    this.signupListen();
  },
  methods: {
    checkLoginStatus() {
      console.log("login status", this.$authManager.getAccount());
      if (this.$authManager.getAccount()) {
        console.log("login state", this.$authManager.isLoggedIn);

        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    },
    async login() {
      const response = await this.$authManager.login();
      console.log("Login/Signup response:", response);
    },
    loginListen() {
      this.$authManager.addEventListener("TRIA_LOGIN", () => {
        console.log("setting login state");
        this.isLoggedIn = true;
      });
    },
    signupListen() {
      this.$authManager.addEventListener("TRIA_SIGNUP", () => {
        console.log("setting signup state");
        this.isLoggedIn = true;
      });
    },
    logoutListen() {
      this.$authManager.addEventListener("TRIA_LOGOUT", () => {
        this.isLoggedIn = false;
      });
    },
    async disconnect() {
      await this.$authManager.disconnect();
      this.isLoggedIn = false;
    },
    async signMessage() {
      if (this.message) {
        const result = await this.$authManager.signMessage(this.message);
        console.log("Signed message:", result);
      }
    },
    async sendTransaction() {
      if (this.amount && this.recipientAddress) {
        const result = await this.$authManager.send(
          this.amount,
          this.recipientAddress
        );
        console.log("Transaction sent:", result);
      }
    },
    async writeContract() {
      const contractDetails = {
        contractAddress: "0x9f5033463b31D213462Ce03A81610364aa80Ba14",
        abi: [
          {
            inputs: [
              { internalType: "uint256", name: "_tokenId", type: "uint256" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "address", name: "_claimer", type: "address" },
            ],
            name: "airdropCoupon",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "airdropCoupon",
        args: [2, 1, "0xCA679c7e0a1E88C950F71A57dd457A39872DE640"],
      };
      const result = await this.$authManager.writeContract(contractDetails);
      console.log("Contract written:", result);
    },
    async readContract() {
      const contractDetails = {
        contractAddress: "0x9f5033463b31D213462Ce03A81610364aa80Ba14",
        abi: [
          {
            inputs: [
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "uri",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        functionName: "uri",
        args: [
          "0xd3b267e459b2dd2d06cad080b75e12cf0ecf35807bb0719ce28f5dd9ae1516cc",
        ],
      };
      const result = await this.$authManager.readContract(contractDetails);
      console.log("Contract read:", result);
    },
    getAccountInfo() {
      this.account = this.$authManager.getAccount();
      console.log("Account:", this.account);
    },
    async getBalance() {
      const balance = await this.$userController.getAssetDetails(
        "FUSE",
        undefined,
        "admin@tria"
      );
      console.log("Balance:", balance);
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action {
  margin-bottom: 20px;
}

.input {
  margin-right: 10px;
  padding: 10px;
  font-size: 14px;
}

.action-btn {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}
</style>
