const express = require("express");

//We can separate routes in multiple files
const route = express.Router();

route.post("/sign-in", (req, res) => {
  res.send("Logged in Successfully");
});
// http://localhost:5000/auth/sign-in

route.post("/sign-up", (req, res) => {
  res.send("User Account Created Successfully");
});
//localhost:5000/auth/sign-up

http: module.exports = route;
