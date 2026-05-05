const http = require("http");
const portNumber = 3131;

//create Server
const httpServer = http.createServer(function (req, res) {
  res.end("My first response from node js backend");
});

//start the server
httpServer.listen(portNumber, function () {
  console.log("Http Server Started");
});
