const express = require("express");
const BlogsController = require("./blogs.controller");

// Create a new "sub-router."
const router = express.Router();

// Send the blogs data from the database to the "/api" route.
router.get("/", BlogsController.apiSendBlogData);

// Send the home blog data from the database to the "/api/home-blog" route.
router.get("/home-blog", BlogsController.apiSendHomeBlogData);

// Send blog data by category.
router.get("/filter/:category", BlogsController.apiSendFilteredBlogData);

// Obtain the data from the React app and post it in the database.
router.post("/contribute", BlogsController.apiCreateBlog);

module.exports = router;