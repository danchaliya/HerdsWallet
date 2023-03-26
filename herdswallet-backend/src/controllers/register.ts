// import express from "express";
// import bcrypt from "bcrypt";
// import { Users } from "../models"

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     // Extract the user data from the request body.
//     const { username, email, password, firstName, lastName, phoneNumber } = req.body;

//     // Hash the user's password using bcrypt.
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user in the database.
//     const newUser = await Users.create({
//       username,
//       email,
//       password: hashedPassword,
//       firstName,
//       lastName,
//       phoneNumber
//     });

//     // Return the newly created user as the response.
//     return res.status(201).json(newUser);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Unable to register user." });
//   }
// });

// export default router;
