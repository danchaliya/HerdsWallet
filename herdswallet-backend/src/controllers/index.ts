import express from "express";
import { Dependencies } from "../types";
import AuthController from "./auth.controller";

class ControllerFactory {
  // Method to register controllers with the app
  static registerControllers(app: express.Express, deps: Dependencies) {
    // Create a new instance of the AuthController
    const authController = new AuthController(deps.services);

    // Mount the AuthController's router under the "/auth" path
    // and attach the specified middleware to it
    app.use("/auth", authController.getRouter(deps.middlewares));
  }
}

// Export the ControllerFactory class as the default export
export default ControllerFactory;

