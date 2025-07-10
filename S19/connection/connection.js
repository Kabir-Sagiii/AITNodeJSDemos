const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/nodemongodb";
function createConnection() {
  //Logic to connect nodejs with mongodb database
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected With Database");
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to Connect with Database Server ");
    });
}

module.exports = createConnection;
