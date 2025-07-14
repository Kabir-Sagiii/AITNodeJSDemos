const express = require("express");
const User = require("../model/userSchema");
const route = express.Router();

route.get("/get-users", (req, res) => {
  User.find()
    .then((data) => {
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch(() => {
      res.json({
        ok: false,
        error: error.message,
      });
    });
});
//http://localhost:5000/users/get-users

route.post("/new-user", (req, res) => {
  const newuser = new User(req.body);
  console.log(req.body);
  newuser
    .save()
    .then(() => {
      res.send({ ok: true, message: "User Created" });
    })
    .catch(() => {
      res.send({ ok: false, error: "Failed to create user" });
    });
});
//http://localhost:5000/users/new-user
//post

module.exports = route;
