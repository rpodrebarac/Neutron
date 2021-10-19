const express = require("express");

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