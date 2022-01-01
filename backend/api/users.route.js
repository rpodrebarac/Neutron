const express = require("express");
const UsersController = require("./users.controller");

// Create a "sub-route" object.
const router = express.Router();

// Obtain the user data from the frontend and post it to the database.
router.post("/contributors/sign-up", UsersController.apiSignUpUser);

// Determine if the data submitted by the user matches the data in the database. If so, return a cookie.
router.post("/contributors/log-in", UsersController.apiLogInUser);

// Log out the user.
router.get("/contributors/log-out", UsersController.apiLogOutUser);

// Provide the status regarding whether the user is logged in.
router.get("/status", UsersController.apiUserStatus);

module.exports = router;