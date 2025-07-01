const express = require("express");

const route = express.Router();

route.get("/get-all-users", (req, res) => {
  res.send("Get All Users Data");
});
// http://localhost:5000/users/get-all-users

route.post("/create-new-user", (req, res) => {});
// http://localhost:5000/users/create-new-users

route.put("/update-user", (req, res) => {});
// http://localhost:5000/users/update-user

route.delete("/remove-user", (req, res) => {
  res.send(" Users Data Removed");
});
// http://localhost:5000/users/remove-user

module.exports = route;
