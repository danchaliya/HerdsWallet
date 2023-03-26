import express from "express";
import bcrypt from "bcrypt";
import { Users } from "./models";

// Define a function to register application routes.
export const registerRoutes = (app: express.Express) => {
  // Register a GET route at the '/status' path that sends a simple message.
  app.get("/status", (req: express.Request, res: express.Response) => {
    res.send("Up and running!");
  });

  // Register a POST route at the '/register' path for creating a new user.
  app.post("/register", async (req: express.Request, res: express.Response) => {
    try {
      // Extract the user data from the request body.
      const { username, email, password, firstName, lastName, phoneNumber } = req.body;

      // Hash the user's password using bcrypt.
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database.
      const newUser = await Users.create({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber
      });

      // Return success message to user.
      res.json({ message: "User registration successful." });
    } catch (error) {
      console.error(error);
      // Return error message to user.
      res.status(500).json({ message: "Unable to register user." });
    }
  });

  // Register a POST route at the '/login' path for user login.
  app.post("/login", async (req: express.Request, res: express.Response) => {
    try {
      // Extract the user data from the request body.
      const { username, password } = req.body;

      // Find the user in the database.
      const user = await Users.findOne({ where: { username } });

      if (!user) {
        // Return error message if the user is not found.
        res.status(401).json({ message: "Invalid username or password." });
        return;
      }

      // Compare the provided password with the stored hashed password.
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        // Return error message if the passwords do not match.
        res.status(401).json({ message: "Invalid username or password." });
        return;
      }

      // Return success message to user.
      res.json({ message: "User logged in successfully." });
      res.redirect("/dashboard");
    } catch (error) {
      console.error(error);
      // Return error message to user.
      res.status(500).json({ message: "Unable to log in user." });
    }
  });
};