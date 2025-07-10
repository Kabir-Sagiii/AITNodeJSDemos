const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
});

const Model = mongoose.model("user", UserScehma);

module.exports = Model;
