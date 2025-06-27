const http = require("http");
const readFile = require("./readFile.js");
const checkUserIsValid = require("./auth.js");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    readFile("login.html", res);
  } else if (req.url === "/home") {
    readFile("home.html", res);
  } else if (req.url === "/profile") {
    readFile("profile.html", res);
  } else if (req.url === "/products") {
    readFile("products.html", res);
  } else if (req.url === "/contact") {
    readFile("contact.html", res);
  } else if (req.url === "/error") {
    readFile("error.html", res);
  } else if (req.url === "/login") {
    req.on("data", (data) => {
      checkUserIsValid(JSON.parse(data), res);
    });
  } else {
    res.end("Invalid URL, Page Not found");
  }
});

server.listen(port, () => {
  console.log("Server Started");
});
