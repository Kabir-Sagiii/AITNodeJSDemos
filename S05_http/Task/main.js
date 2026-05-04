const http = require("http");
const fs = require("fs");

server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile("Home.html", "utf-8", (error, data) => {
        if (error) {
          res.end("Failed to Access the File");
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/profile") {
      fs.readFile("Profile.html", "utf-8", (error, data) => {
        if (error) {
          res.end("Failed to Access the File");
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/products") {
      fs.readFile("Products.html", "utf-8", (error, data) => {
        if (error) {
          res.end("Failed to Access the File");
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/login") {
      fs.readFile("Login.html", "utf-8", (error, data) => {
        if (error) {
          res.end("Failed to Access the File");
        } else {
          res.end(data);
        }
      });
    } else {
      res.end("<h1>Invalid Request url</h1>");
    }
  } else {
    res.end("<h1>Invalid Request</h1>");
  }
});

server.listen(3030, () => {
  console.log("http server started on 3030 port number");
});
