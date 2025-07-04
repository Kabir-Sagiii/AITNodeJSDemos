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

//Create the Server and Start the Server
app.listen(port, () => {
  console.log("Server Started");
});
