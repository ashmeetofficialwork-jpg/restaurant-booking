const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// TEMPORARY DATA (instead of database)
let users = [];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

// REGISTER USER (CREATE)
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const newUser = { email, password };
  users.push(newUser);

  res.send("User Registered Successfully");
});

// GET USERS (READ)
app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});