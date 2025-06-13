var user = {
  id: 101,
  name: "Shiva Kumar",
  gender: "male",
};

console.log(user);

delete user.gender;
delete user["id"];
console.log(user);
