const mongoose = require("mongoose");

const UserScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("User", UserScehma);

module.exports = User;
