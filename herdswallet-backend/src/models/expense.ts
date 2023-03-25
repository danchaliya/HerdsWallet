import { Sequelize, Model, DataTypes } from "sequelize";

class Expense extends Model {
  declare name: string;
  declare amount: Number;
  declare category: string;
}

// Define an init function to initialize the User model with Sequelize.
const init = (connection: Sequelize) => {
    Expense.init(
    {
      // Define the columns of the User model.
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      }
    },
    {
      // Set the Sequelize instance to use for the User model.
      sequelize: connection,
      // Set the name of the model to "User".
      modelName: "Expense",
    }
  );
};

// Export the User class as the default export of the module.
export default Expense;
// Export the init function as a named export of the module.
export { init };
