const fs = require("fs");
var data = "<h1> My first File Created using NodeJS </h1>";
fs.writeFile("home.js", "", (error) => {
  if (error) {
    console.log("Failed to create file");
  } else {
    console.log("File Created successfully");
  }
});
