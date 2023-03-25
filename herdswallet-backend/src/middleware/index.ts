import { Services } from "../services/types";
import AuthMiddleware from "./auth";

// Define an interface to represent the available middlewares
export interface Middlewares {
  auth: AuthMiddleware;
}

// Define a factory class to create the available middlewares
class MiddleWareFactory {
  // Define a static method to create the middlewares
  static getMiddlewares(services: Services): Middlewares {
    // Return an object containing the available middlewares
    return {
      auth: new AuthMiddleware(services),
    };
  }
}

// Export the MiddleWareFactory class as the default export of the module
export default MiddleWareFactory;