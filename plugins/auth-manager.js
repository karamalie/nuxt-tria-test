import { AuthManager } from "@tria-sdk/authenticate-web";

export default ({ app }, inject) => {
  // Initialize the AuthManager

  const authManager = new AuthManager({
    analyticsKeys: {
      clientId: "b48d8230-57f9-43fb-a952-722668bb3521",
      projectId: "f5c9aa2c-a94e-42c5-a85b-b943f07b8bc9",
    },
  });
  authManager.configure({
    chain: "SEPOLIA",
    // triaStaging: false,
  });

  // configure web 3 settings
  authManager.configure({
    chain: "SEPOLIA",
    environment: "testnet",
  });

  // Inject the authManager into the app
  inject("authManager", authManager);
};
