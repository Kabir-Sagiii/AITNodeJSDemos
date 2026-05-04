const http = require("http");
const {
  getRequestHandler,
  anotherGetRequestHandler,
} = require("./getRequestHandler.js");
const { postRequestHandler } = require("./postRequestHandler.js");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.method === "GET") {
    if (req.url === "/another") {
      anotherGetRequestHandler(req, res);
    } else {
      getRequestHandler(req, res);
    }
  } else {
    postRequestHandler(req, res);
  }
});

server.listen(4141, () => {
  console.log("Server Started");
});

// http://localhost:4141 : Get Request

// http://localhost:4141/another : Get Request
