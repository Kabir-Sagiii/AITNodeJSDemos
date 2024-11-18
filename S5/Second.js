// const obj = require("./first.js");
// console.log(obj.username);
// obj.f1();

// const { f1, username } = require("./first.js");
// console.log(username);
// f1();

const [f1, username] = require("./first.js");
console.log(username);
f1();
