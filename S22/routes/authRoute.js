const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const route = express.Router();
const secret_key =
  "cdlncvdlknvlkdfnvkdlfnvkfdlnvkfdlnvkfdlnvkdflnvkdflnvklfdnvkfdlnvkfdlnvkdflnvkdlfnvdkflvndfkl";

route.post("/sign-in", async (req, res) => {
  try {
    var userdata = req.body;
    var data = await User.find(userdata);
    if (data.length > 0) {
      jwt.sign(userdata, secret_key, (error, token) => {
        if (error) {
          console.log(error);
          res.json({ ok: false, message: "failed to generate token" });
        } else {
          res.json({ ok: true, token: token, message: "User is Valid" });
        }
      });
    } else {
      res.json({ ok: false, message: "User does not exit" });
    }
  } catch (error) {
    res.json({
      ok: false,
      error: errror.message,
    });
  }
});

module.exports = route;
