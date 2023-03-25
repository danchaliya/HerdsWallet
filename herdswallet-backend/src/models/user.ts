import { Sequelize, Model, DataTypes } from "sequelize";

class User extends Model {
  declare id: string;
  declare username: string;
  declare email: string;
  declare firstName: string;
  declare lastName: string;
  declare password: string;

  verifyPassword(password: string): boolean {
    return password === this.password;
  }
}

// Define an init function to initialize the User model with Sequelize.
const init = (connection: Sequelize) => {
  User.init(
    {
      // Define the columns of the User model.
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      // Set the Sequelize instance to use for the User model.
      sequelize: connection,
      // Set the name of the model to "User".
      modelName: "User",
    }
  );
};

// Export the User class as the default export of the module.
export default User;
// Export the init function as a named export of the module.
export { init };
