const http = require("http");
const fs = require("fs");
const port = 8989;

//create the server
// const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("InstaLogin.html", "utf-8", (error, data) => {
//     if (error) {
//       res.end("Failed to Read or Access Content of the file");
//     } else {
//       res.end(data);
//     }
//   });
// });

const server = http.createServer((req, res) => {
  fs.readFile("login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("Failed to Read or Access Content of the file");
    } else {
      res.end(data);
    }
  });
});

//start the server
server.listen(port, () => {
  console.log("Server Started on Port No : ", port);
});
