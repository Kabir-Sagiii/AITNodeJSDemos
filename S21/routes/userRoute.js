const express = require("express");
const User = require("../model/userSchema");
const { getUser, signup } = require("../controllers/userController");
const route = express.Router();

route.get("/get-data-based-on-gender", async (req, res) => {
  //access the gender value from request using query params
  var gender = req.query.gender;
  try {
    var resp = await User.find({ gender: gender });
    res.send({
      ok: true,
      result: resp,
    });
  } catch (error) {
    res.send({
      ok: false,
      result: error.message,
    });
  }
});

route.get("/get-users", (req, res) => {
  getUser(res);
});
//http://localhost:5000/users/get-users

route.post("/new-user", (req, res) => {
  signup(req, res);
});
//http://localhost:5000/users/new-user
//post

route.delete("/remove-user/:id", (req, res) => {
  User.deleteOne({ _id: id })
    .then((resp) => {
      console.log(resp);
      if (resp.deletedCount > 0) {
        res.send({ ok: true, result: "user removed successfully" });
      } else {
        res.send({ ok: false, result: "user does not exit to remove" });
      }
    })
    .catch((error) => {
      res.send({ ok: false, result: error.message });
    });
});
//http://localhost:5000/users/remove-user/<id>

route.put("/update-user/:id", async (req, res) => {
  try {
    var resp = await User.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    if (resp.modifiedCount > 0) {
      res.send({
        ok: true,
        result: "User Data Updated",
      });
    } else {
      res.send({
        ok: false,
        result: "Failed to Update",
      });
    }
  } catch (error) {
    res.send({
      ok: false,
      error: error.message,
    });
  }
});

module.exports = route;
