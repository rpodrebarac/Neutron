const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); 

// Variables to connect to the database and collection.
let neutronDB;
let usersCollection;

// A variable for the age of the JWT token (one day).
const tokenAge = 60 * 60 * 24;

// The UsersDAO class.
module.exports = class UsersDAO {
    // Connect to the users collection.
    static async insertDatabase(connection) {
        try {
            neutronDB = await connection.db("neutron");
            usersCollection = await neutronDB.collection("users");
        } catch (error) {
            console.log("An error was experienced upon attempting to connect to the users collection: " + error);
        }
    }

    // Sign up a new user.
    static async signUp(userData) {
        // Attempt to post the said data.
        try {
            // Generate a salt for the user's password.
            const salt = await bcrypt.genSalt();

            // Utilize the said salt to generate a hashed password.
            userData.password = await bcrypt.hash(userData.password, salt);

            // Insert the new data into the database.
            await usersCollection.insertOne(userData);

            // Ensure that the said sign up function appropriately.
            console.log("Successfully signed up a user.");
        } catch (error) {
            console.log("There was an error in the sign up process: " + error);
        }
    }

    // Log in a user.
    static async logIn(userData) {
        // Destructure the userData.
        const { email, password } = userData;

        try {
            // Find a document with the said email and password.
            const user = await usersCollection.findOne({ email: email });

            // If the user exists.
            if (user) {
                // Ensure that the password is correct (the method hashes it and compares it to the password in the database).
                const authenticated = await bcrypt.compare(password, user.password);

                // If the user does indeed exist.
                if (authenticated) {
                    return user;
                }

                // Throw an error if otherwise.
                throw Error("Incorrect password.");
            }
        } catch (error) {
            console.log("An error occurred: " + error);
        }
    }

    // To create a JWT token.
    static async createLogInToken(id) {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: tokenAge
        })
    }
}