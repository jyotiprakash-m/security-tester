const express = require("express");
const app = express();

// Set up a route to serve your HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
