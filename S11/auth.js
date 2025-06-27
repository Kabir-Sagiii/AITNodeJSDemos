const fs = require("fs");
const readFile = require("./readFile.js");
function checkUserIsValid(logindata, res) {
  fs.readFile("users.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Failed to read file");
      readFile("error.html", res);
    } else {
      var dataInObjectFormat = JSON.parse(data);

      var user = dataInObjectFormat.users.find((user) => {
        return (
          user.email == logindata.email && user.password == logindata.password
        );
      });

      if (user) {
        readFile("home.html", res);
      } else {
        readFile("error.html", res);
      }
    }
  });
}
module.exports = checkUserIsValid;
