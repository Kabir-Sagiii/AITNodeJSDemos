const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/nodemongodb";
function createConnection() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected with Database");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = createConnection;
