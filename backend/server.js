const express = require("express");
const { MongoClient } = require("mongodb");
const BlogsDAO = require("./dao/blogsDAO");

// MongoDB URI.
const URI = "mongodb+srv://Henry:gw-henry2021@cluster0.npt1l.mongodb.net/Project0?retryWrites=true&w=majority";

// New MongoDB client.
const client = new MongoClient(URI);

let blogsData;

async function initialize() {
    try {
        await client.connect();
        await BlogsDAO.insertDataBase(client);
        blogsData = await BlogsDAO.retrieveAllBlogs();
    } catch(error) {
        console.log("Unable to connect to the said database: " + error);
    }

    // catch (error) {
    //     console.log(error);
    // } finally {
    //     await client.close();
    // }
}

async function listDataBases(client) {
    databasesList = await client.db().admin().listDataBases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`  -${db.name}`));
}

initialize()
    .catch(error => console.log(error));

// Initialize the Express app.
const app = express();

// Initialize the port.
const PORT = process.env.PORT || 3001;

// Send all data to "/api".
app.get("/api", (request, response) => {
    // Obtain the data from the BlogsDAO.
    response.json(blogsData);
});

// Listen on port 3001.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});