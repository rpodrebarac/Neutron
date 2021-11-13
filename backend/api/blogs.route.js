const express = require("express");
const BlogsController = require("./blogs.controller");

// Create a new "sub-router."
const router = express.Router();

// Send the blogs data from the database to the "/api" route.
router.get("/api", BlogsController.apiSendBlogData);

module.exports = router;