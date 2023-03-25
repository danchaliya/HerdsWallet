import express from "express";
import { registerRoutes } from "./src/routes";
import Database from "./src/database/database";

const startServer = async () => {
    // Create a new Express application.
    const app: express.Express = express();
  
    // Register the application routes.
    registerRoutes(app);
     // Create a new Database instance.
    const db = new Database();

    // Connect to the database.
    await db.connect();
  
    // Start listening for incoming requests on the configured port.
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  };
  
  // Start the server.
  startServer();