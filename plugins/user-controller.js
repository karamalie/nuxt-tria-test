import { UserController } from "@tria-sdk/core";

export default ({ app }, inject) => {
  // Initialize the User Controller
  const userController = new UserController("https://prod.tria.so");
  console.log("userController", userController);
  // Inject the controller into the app
  inject("userController", userController);
};
