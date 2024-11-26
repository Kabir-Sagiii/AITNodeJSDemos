const http = require("http");
const fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("./public/Home.html", "utf-8", (error, data) => {
      if (error) {
        response.end("Something went Wrong");
      } else {
        response.end(data);
      }
    });
  } else if (request.url === "/products") {
    fs.readFile("./public/Products.html", "utf-8", (error, data) => {
      if (error) {
        response.end("Something went Wrong");
      } else {
        response.end(data);
      }
    });
  } else if (request.url === "/profile") {
    fs.readFile("./public/Profile.html", "utf-8", (error, data) => {
      if (error) {
        response.end("Something went Wrong");
      } else {
        response.end(data);
      }
    });
  }
}); //http://localhost:5656/

server.listen(5656, () => {
  console.log("Serve rStarted");
});
