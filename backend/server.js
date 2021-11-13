const express = require("express");
const { MongoClient } = require("mongodb");
const router = require("./api/blogs.route");
const BlogsDAO = require("./dao/blogsDAO");

// MongoDB URI.
const URI = "mongodb+srv://Henry:gw-henry2021@cluster0.npt1l.mongodb.net/Project0?retryWrites=true&w=majority";

// New MongoDB client.
MongoClient.connect(URI)
    .then(async client => await BlogsDAO.insertDataBase(client))
    .catch(error => console.log("Unable to connect to the database: " + error));

// Initialize the Express app.
const app = express();

// Initialize the port.
const PORT = process.env.PORT || 3001;

// All blog related routes.
app.use("/", router);

// Listen on port 3001.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});