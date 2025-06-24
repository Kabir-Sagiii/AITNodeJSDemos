const http = require("http");

//create the server
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received");
  res.end("Hello, Request Received and it is under Process");
});

//start the server
server.listen(7979, () => {
  console.log("Server Started on Port No 7979");
});
