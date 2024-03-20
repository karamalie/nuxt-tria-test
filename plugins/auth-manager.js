import { AuthManager } from "@tria-sdk/authenticate-web";

export default ({ app }, inject) => {
  // Initialize the AuthManager
  const authManager = new AuthManager({
    darkMode: true,
    dappName: "Sync Vault",
    logo: "https://svgshare.com/i/11sN.svg",
    metaToken:
      "AmcY3do0E/2XQR4+m8Z/47Pn/gAjVu2nARXhl2zSfVK5dfG5/eL8flB8WMKMcxMiCf5TEmVhZfXggjnJPK8vLQ8AAACMeyJvcmlnaW4iOiJodHRwczovL3RyLW51eHQtc2FuZGJveC5uZXRsaWZ5LmFwcDo0NDMiLCJmZWF0dXJlIjoiRGlzYWJsZVRoaXJkUGFydHlTdG9yYWdlUGFydGl0aW9uaW5nIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=",
  });

  // configure web 3 settings
  // authManager.configure({
  //   chain: "MUMBAI",
  //   environment: "mainnet",
  // });

  // Inject the authManager into the app
  inject("authManager", authManager);
};
