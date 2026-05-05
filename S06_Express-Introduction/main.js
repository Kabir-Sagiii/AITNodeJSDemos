const express = require("express");

const app = express();

//creates the http server and starts the server
app.listen(4949, () => {
  console.log("Server Started");
});

//end-point  or  Get Route

app.get("/access-users", (req, res) => {
  //handle the request
  res.send("Get Request End-Point Respons");
});
// http://localhost:4949/access-users : Get Request

app.post("/create-user", (req, res) => {
  res.send("Post Request End-Point Respons");
});
// http://localhost:4949/create-user : Post Request

app.put("/update-user", (req, res) => {
  res.send("Put Request End-Point Respons");
});
// http://localhost:4949/update-user : Put Request

app.delete("/remove-user", (req, res) => {
  res.send("Delete Request End-Point Respons");
});

// http://localhost:4949/remove-user : Delete Request
