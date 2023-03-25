import express from "express";
import passport from "passport";

// Define a function to register application routes.
export const registerRoutes = (app: express.Express) => {
  // Register a GET route at the '/status' path that sends a simple message.
  app.get("/status", (req: express.Request, res: express.Response) => {
    res.send("Up and running!");
  });
}