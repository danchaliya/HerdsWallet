import { Services } from "../services/types";
import express from "express";
import RequestError from "../errors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Middlewares } from "../middleware";

class AuthController {
  protected services: Services;

  constructor(services: Services) {
    this.services = services;
  }

  // Returns an Express Router instance with the AuthController routes defined
  public getRouter(middlewares: Middlewares) {
    const router = express.Router();

    // Configure Passport to use LocalStrategy for authentication
    passport.use(
      new LocalStrategy(async (username, password, cb) => {
        return this.services.auth.verifyLogin(username, password, cb);
      })
    );

    // Configure Passport to serialize user to the session
    passport.serializeUser((user, cb) => {
      cb(null, { id: (user as any).id });
    });

    // Configure Passport to deserialize user from the session
    passport.deserializeUser((user: any, cb) => {
      if (user) {
        cb(null, user);
      } else {
        cb(null, false);
      }
    });

    // Define the "/status" route that requires authentication using the middlewares.auth.isAuthenticated middleware
    router.get("/status", middlewares.auth.isAuthenticated, this.getStatus);

    // Define the "/register" route that calls the register method on POST request
    router.post("/register", this.register.bind(this));

    // Define the "/login" route that authenticates the user using Passport's LocalStrategy
    router.post("/login", passport.authenticate("local"), (req, res) =>
      res.send("Logged in")
    );

    return router;
  }

  // Returns a simple message indicating that the user is logged in
  protected getStatus(req: express.Request, res: express.Response) {
    res.send("Logged in!");
  }

  // Creates a new user using the provided credentials
  protected async register(req: express.Request, res: express.Response) {
    try {
      const user = await this.services.auth.registerUser(req.body);
      res.status(201).send({ user });
    } catch (error: any) {
      let err = error as RequestError;
      res.status(err.statusCode).send({ error: err.message, name: err.name });
    }
  }
}

export default AuthController;