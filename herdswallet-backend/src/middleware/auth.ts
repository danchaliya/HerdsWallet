import { NextFunction, Request, Response } from "express";
import { Services } from "../services/types";

// Define a class called AuthMiddleware
class AuthMiddleware {
  // Declare a protected property called services of type Services
  protected services: Services;

  // Define the constructor that receives an object of type Services and assigns it to the services property
  constructor(services: Services) {
    this.services = services;
  }

  // Define the isAuthenticated method that receives the request, response, and next middleware function as arguments
  public isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Check if the request object contains a user property (i.e., the user is authenticated)
    if (req.user) {
      // If so, call the next middleware function in the chain
      next();
    } else {
      // Otherwise, send a 401 Unauthorized HTTP response to the client
      res.status(401).send("Unauthorized");
    }
  }
}

// Export the AuthMiddleware class as the default export of the module
export default AuthMiddleware;
