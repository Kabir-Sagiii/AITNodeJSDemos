var user = {
  id: 101,
  name: "Sid",
  email: "sid@gmail.com",
};

function changeName() {
  user.name = "Raj";
  console.log(user);
}

console.log("users file is executed");

module.exports = { user, changeName };
