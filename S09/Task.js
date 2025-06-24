const http = require("http");
const fs = require("fs");

//create the server
const server = http.createServer();

server.on("request", (req, res) => {
  fs.writeFile("home.html", "<h1>File Created</h1>", (error) => {
    if (error) {
      res.end("Failed to Create File");
    } else {
      res.end("File Created successfully");
    }
  });
});

//start the server
server.listen(7979, () => {
  console.log("Server Started on Port No 7979");
});
