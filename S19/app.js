const express = require("express");
const createConnection = require("./connection/connection");
const userModel = require("./model/userSchema");
const app = express();

app.get("/get", (req, res) => {
  //get the data from Collection
  userModel
    .find()
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, result: error.message });
    });
});

app.listen(5000, () => {
  console.log("Server Started");
  createConnection();
});
