var userGender = "gender";
var userName = "name";

var user = {
  id: 101,
  name: "Shiva Kumar",
  gender: "male",
};

var value = user.name;
var anotherValue = user["gender"];

var value = user.userName;
var anotherValue = user[userGender];

console.log(value, anotherValue);
