const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  fs.mkdir("./NodeJS", (error) => {
    if (error) {
      res.end("<h2 style='color:red;'>Failed to create Folder</h2>");
    } else {
      res.end("<h2 style='color:green;'>Successfully New Folder Created</h2>");
    }
  });
}); // http://localhost:4646

server.listen(4646, () => {
  console.log("Server Started...");
});
