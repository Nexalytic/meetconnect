const express = require("express");

const app = express();

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});