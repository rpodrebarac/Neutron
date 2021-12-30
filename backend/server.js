const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const blogRouter = require("./api/blogs.route");
const userRouter = require("./api/users.route")
const BlogsDAO = require("./dao/blogsDAO");
const UsersDAO = require("./dao/usersDAO");

// MongoDB URI.
const URI = process.env.URI;

// New MongoDB client.
MongoClient.connect(URI)
    .then(async client => {
        await BlogsDAO.insertDatabase(client);
        await UsersDAO.insertDatabase(client);
    })
    .catch(error => console.log("Unable to connect to the database: " + error));

// Initialize the Express app.
const app = express();

// Initialize the port.
const PORT = process.env.PORT || 3001;

// Middleware.
app.use(express.json());

// All blog and user related routes.
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

// Listen on port 3001.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});