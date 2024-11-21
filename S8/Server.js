const http = require("http");
const fs = require("fs");

// var server = http.createServer((req, res) => {
//   //   res.end("Hello, This is my First Response");
//   res.end("<h1 style='color:green;'>Hello, This is my First Response</h1>");
// });

var server = http.createServer((req, res) => {
  fs.mkdir("./CSS", (error) => {
    if (error) {
      res.end("<h1 style='color:red'>Failed to create Folder</h1>");
    } else {
      res.end("<h1 style='color:green'>Folder is Created</h1>");
    }
  });
});

server.listen(4646, () => {
  console.log("Server is Started");
});

//http://localhost:4646
