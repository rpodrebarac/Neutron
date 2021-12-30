const UsersDAO = require("../dao/usersDAO");

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
            const token = UsersDAO.createLogInToken(user._id);
            response.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
            response.status(201).json({ user: user._id });
        } catch (error) {
            console.log("An error occurred upon attempting to log the said user in: " + error);
        }
    }
}