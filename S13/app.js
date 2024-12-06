const express = require("express");
const fs = require("fs");
const app = express();

app.get("/text", (req, res) => {
  res.send("Welcome to Express");
}); //http://localhost:7979/text : endpoint

app.get("/html", (req, res) => {
  res.send("<h2>Welcome to Express API's</h2>");
}); //http://localhost:7979/html : endpoints

app.get("/json", (req, res) => {
  res.json({ name: "S1", city: "pune", pin: 989879 });
}); //http://localhost:7979/json

app.get("/getfile", (req, res) => {
  fs.readFile("./Home.html", "utf-8", (err, data) => {
    if (err) {
      res.send(
        "<h1 style:'color:red;'>Error while accessing the data From file</h1>"
      );
    } else {
      res.send(data);
    }
  });
}); // http://localhost:7979/getfile

app.listen(7979, () => {
  console.log("Node Server Started");
}); //http://localhost:7979
