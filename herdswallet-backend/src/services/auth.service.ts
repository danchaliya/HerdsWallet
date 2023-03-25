// Import the necessary dependencies
import Database from "../database/database";
import { Services } from "./types";
import joi from "joi";
import { BadRequestError, InternalServerError } from "../errors";
import bcrypt from "bcrypt";
import { IVerifyOptions } from "passport-local";

// Define the interface for the user registration data
interface RegisterUserData {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  id: string;
}

// Define the AuthService class
class AuthService {
  protected db: Database;
  protected services: Services;

  // Constructor for the AuthService class, takes in a Database instance and a Services object
  constructor(db: Database, services: Services) {
    this.db = db;
    this.services = services;
  }

  // Method to register a new user
  public async registerUser(data: Record<string, unknown>) {
    // Validate the user registration data
    const validation = this.validateRegisterUserData();

    // If the data is invalid, throw a BadRequestError with the validation reason
    if (!validation.valid(data)) {
      throw new BadRequestError(validation.reason(data));
    }

    // Hash the user's password
    const { password } = data;
    const hashedPassword = this.hashPassword(password);

    try {
      // Create a new user in the database
      const user = await this.db.tables.user.create({
        ...data,
        password: hashedPassword,
      });

      return user;
    } catch (error: any) {
      // If there is an error creating the user, throw an InternalServerError
      throw new InternalServerError(error.message);
    }
  }

  // Method to verify a user's login credentials
  public async verifyLogin(
    username: string,
    password: string,
    cb: (
      error: any,
      user?: Express.User | false,
      options?: IVerifyOptions
    ) => void
  ) {
    try {
      // Find the user in the database by their username
      const user = await this.db.tables.user.findOne({ where: { username } });

      // If the user doesn't exist, call the callback function with an error
      if (!user) {
        cb(new Error("User not found"), false);
        return;
      }

      // If the user does exist, verify their password
      const passwordHash = user.password;
      if (!this.verifyPassword(password, passwordHash)) {
        cb(new Error("Invalid Password"), false);
        return;
      }

      // If the password is valid, call the callback function with the user object
      cb(null, user);
    } catch (error) {
      // If there is an error finding the user, call the callback function with an error
      cb(error, false);
    }
  }

  // Method to validate the user registration data
  protected validateRegisterUserData() {
    const schema = joi.object({
      username: joi.string().min(1).required(),
      password: joi.string().min(8).required(),
      firstName: joi.string().min(1).required(),
      lastName: joi.string().min(1).required(),
      email: joi.string().email().required(),
      id: joi.string().min(1).required(),
    });

    // Reason function to return the validation error message
    const reason = (_data: any) => {
      return schema.validate(_data).error?.message as string;
    };

    // Valid function to check if the data is valid according to the schema
    const valid = (_data: any): _data is RegisterUserData => {
      return schema.validate(_data).error ? false : true;
    };

    return {
      reason,
      valid,
    };
  }

  protected hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  protected verifyPassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}

export default AuthService;