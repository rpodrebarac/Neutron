const express = require("express");
const { MongoClient } = require("mongodb");

// MongoDB URI.
const URI = "mongodb+srv://Henry:gw-henry2021@cluster0.npt1l.mongodb.net/Project0?retryWrites=true&w=majority";

// New MongoDB client.
const client = new MongoClient(URI);

async function test() {
    try {
        await client.connect();
        // await listDataBases(client);

        // Creating an object for the "neutron" database.
        const neutronDB = await client.db("neutron");
        const neutronCollections = await neutronDB.listCollections().toArray();

        neutronCollections.map(collection => console.log(collection));
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

async function listDataBases(client) {
    databasesList = await client.db().admin().listDataBases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`  -${db.name}`));
}

test();

// Initialize the Express app.
const app = express();

// Initialize the port.
const PORT = process.env.PORT || 3001;

// 
app.get("/api", (request, response) => {
    response.json({ message: "Hello from the backend!" });
});

// Listen on port 3001.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

test()
    .catch(error => console.log(error));