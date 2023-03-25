import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL as string);

class Database {
  protected connection: Sequelize | undefined;

  public async connect() {
    // Create a new Sequelize instance with the database configuration.
    this.connection = sequelize;

    try {
      // Test the database connection by authenticating with the credentials.
      await this.connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      // Handle errors by setting the connection to undefined and logging the error.
      this.connection = undefined;
      console.error("Unable to connect to the database:", error);
    }
  }
}

// Export the Database class as the default export of the module.
export default Database;
