const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample in-memory storage
let users = [];

// Route for registration
app.post("/register", (req, res) => {
  const { name, email, phone, event } = req.body;

  if (!name || !email || !phone || !event) {
    return res.json({ message: "All fields are required!" });
  }

  users.push({ name, email, phone, event });

  console.log("Registered Users:", users);

  res.json({ message: "Registration Successful!" });
});

// Start server
app.listen(5000, () => {
  // console.log("Server running on http://localhost:3000");
  app.get("/", (req, res) => {
    res.send("Hello!");
  });
});
