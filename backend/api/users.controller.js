const UsersDAO = require("../dao/usersDAO");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = class UsersController {
    // Send a request to sign up a user.
    static async apiSignUpUser(request, response) {
        // Log the user's information to the console.
        console.log(request.body);

        // Insert such user data into the database.
        UsersDAO.signUp(request.body);
    }

    // Send a request to log in a user.
    static async apiLogInUser(request, response) {
        // Determine if the user exists in the database, and if so, generate a cookie for the said user.
        try {
            const user = await UsersDAO.logIn(request.body);
            const token = await UsersDAO.createLogInToken(user._id);
            response.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
            response.status(200).json({ user: user._id });
        } catch (error) {
            console.log("An error occurred upon attempting to log the said user in: " + error);
        }
    }

    // Log a user out.
    static async apiLogOutUser(request, response) {
        // Reset the JWT with an age of one millisecond.
        try {
            response.cookie("jwt", "", { maxAge: 1 });
            response.json("Please view this: " + request.cookies.jwt);
            console.log("The user should be logged out now.");
        } catch (error) {
            console.log("An error occurred upon attempting to log out: " + error);
        }
    }

    // Determine if the user is logged in.
    static async apiUserStatus(request, response) {
        // Obtain the user's token.
        const token = request.cookies.jwt;

        // Determine if the said token exists.
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (error, decodedToken) => {
                if (error) {
                    console.log("Failure.");
                    console.log(error.message);
                } else {
                    // Log "success" to the console.
                    console.log("Success.");

                    // Obtain the user's information.
                    const userFirstName = await UsersDAO.obtainUserData(decodedToken.id);
                    
                    // Send the user's first name and status to the frontend.
                    response.json({ firstName: userFirstName, status: true });
                }
            });
        } else {
            console.log("You are not logged in.");
        }
    }
}