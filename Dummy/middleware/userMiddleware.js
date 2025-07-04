function checkUser(req, res, next) {
  //code to validate User
  console.log("User is Validated");
  next();
}

module.exports = checkUser;
