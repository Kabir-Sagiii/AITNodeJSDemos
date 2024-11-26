const http = require("http");
const fsObjs = require("./FS.js");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.url);
  if (req.url === "/create") {
    fsObjs.createFolder(res);
  } else if (req.url === "/delete") {
    fsObjs.deleteFolder(res);
  } else {
    res.end("<h2>Invalid Request</h2>");
  }
}); // http://localhost:4646

// http://localhost:4646/create
// http://localhost:4646/remove

server.listen(4646, () => {
  console.log("Server Started...");
});
