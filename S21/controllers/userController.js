const User = require("../model/userSchema");
function getUser(res) {
  User.find()
    .then((data) => {
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch(() => {
      res.json({
        ok: false,
        error: error.message,
      });
    });
}

function signup(req, res) {
  const newuser = new User(req.body);
  newuser
    .save()
    .then(() => {
      res.send({ ok: true, message: "User Created" });
    })
    .catch(() => {
      res.send({ ok: false, error: "Failed to create user" });
    });
}

module.exports = { getUser, signup };
