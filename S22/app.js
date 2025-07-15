const express = require("express");
const UserRoute = require("./routes/userRoute");
const AuthRoute = require("./routes/authRoute");
const createConnection = require("./connection/connection");
const app = express();
app.use(express.json());
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.listen(5000, () => {
  console.log("Server Started");
  createConnection();
});
