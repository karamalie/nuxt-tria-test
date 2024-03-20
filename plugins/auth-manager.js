import { AuthManager } from "@tria-sdk/authenticate-web";

export default ({ app }, inject) => {
  // Initialize the AuthManager
  const authManager = new AuthManager({
    darkMode: true,
    dappName: "Sync Vault",
    logo: "https://svgshare.com/i/11sN.svg",
    metaToken:
      "AlU4GUR1ZBasFEUCNe8USkx7GSokITQbNSdgFlU9Zrg6aP+ThjAbiDdKq0gXIdk/agcphCw4k/hxIBcSD4wilQ8AAABneyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiRGlzYWJsZVRoaXJkUGFydHlTdG9yYWdlUGFydGl0aW9uaW5nIiwiZXhwaXJ5IjoxNzI1NDA3OTk5fQ==",
  });

  // configure web 3 settings
  // authManager.configure({
  //   chain: "MUMBAI",
  //   environment: "mainnet",
  // });

  // Inject the authManager into the app
  inject("authManager", authManager);
};
