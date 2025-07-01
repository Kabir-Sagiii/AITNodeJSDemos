//import the express package
const express = require("express");
const UserRoute = require("./routes/usersRoute");
const AuthRoute = require("./routes/authRoute");
const port = 5000;

//Initializing the express PAckage
const app = express();

//Configure the Routes
app.use("/auth", AuthRoute);
app.use("/users", UserRoute);

app.get("/getusers", (req, res) => {
  res.send("First API in Express");
});
//http://localhost:5000/getusers

app.get("/html", (req, res) => {
  res.send("<h1>Welcome to express</h1>");
});
//http://localhost:5000/html

app.get("/json", (req, res) => {
  res.send({
    ok: true,
    results: [{ name: "S1" }, { name: "S2" }, { name: "S3" }],
  });
});
//http://localhost:5000/json

app.post("/create-users", (req, res) => {
  res.send("Post Request Received");
});
//http://localhost:5000/create-users

app.put("/update-users", (req, res) => {
  res.send("Put Request Received");
});
//http://localhost:5000/update-users

app.delete("/remove-users", (req, res) => {
  res.send("Delete Request Received");
});
//http://localhost:5000/remove-users

//Create the Server and Start the Server
app.listen(port, () => {
  console.log("Server Started");
});

// var count = 0;
// for (var key in app) {
//   console.log(key);
//   count++;
// }
// console.log(count);
