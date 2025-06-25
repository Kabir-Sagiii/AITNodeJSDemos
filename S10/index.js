// const http = require("http");
// const readFile = require("./readFile.js");
// const port = 5000;
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     readFile("home.html", res);
//   } else if (req.url === "/profile") {
//     readFile("profile.html", res);
//   } else if (req.url === "/products") {
//     readFile("products.html", res);
//   } else if (req.url === "/contact") {
//     readFile("contact.html", res);
//   } else {
//     res.end("Invalid URL, Page Not found");
//   }
// });

// server.listen(port, () => {
//   console.log("Server Started");
// });

// //http://localhost:5000/ ----> home.html

// //http://localhost:5000/products ----> products.html

// //http://localhost:5000/profile ----> profile.html

// //http://localhost:5000/contact ----> contact.html

const http = require("http");
const readFile = require("./readFile.js");
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
  } else {
    res.end("Invalid URL, Page Not found");
  }
});

server.listen(port, () => {
  console.log("Server Started");
});
