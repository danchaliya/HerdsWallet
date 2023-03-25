import { Sequelize } from 'sequelize';
import { User, userInit, Expense, expenseInit } from "../models";

// Create a new Sequelize instance with the connection URL from the environment variables.
const sequelize = new Sequelize(process.env.DATABASE_URL as string);

class Database {
  // Declare a connection property that will store the Sequelize instance after connecting.
  protected connection: Sequelize | undefined;

  // Declare a tables object that maps table names to Sequelize model classes.
  public tables = {
    user: User,
    expense: Expense, // fixed typo: changed "expnse" to "expense"
  };

  // Declare an async method to connect to the database and synchronize the models with the schema.
  public async connect() {
    // Assign the Sequelize instance to the connection property.
    this.connection = sequelize;

    try {
      // Test the database connection by authenticating with the credentials.
      await this.connection.authenticate();
      console.log("Connection has been established successfully.");

      // Initialize the database models with the Sequelize instance.
      userInit(this.connection);
      expenseInit(this.connection);

      // Define associations between the models.
      User.hasMany(Expense, { foreignKey: 'id' });
      Expense.belongsTo(User, { foreignKey: 'id' });

      // Synchronize the models with the database schema.
      await this.connection.sync({ alter: true });
      console.log("All models were synchronized successfully.");
    } catch (error) {
      // Handle errors by setting the connection to undefined and logging the error.
      this.connection = undefined;
      console.error("Unable to connect to the database:", error);
    }
  }
}

// Export the Database class as the default export of the module.
export default Database;
