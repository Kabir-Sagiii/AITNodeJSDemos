var fs = require("fs");
var x = 100;
var y = 200;

function f1() {
  console.log("f1 is called");
}

f1();

fs.readFile("./Home.txt", "utf-8", () => {
  console.log("reading the file......");
});

function f2() {
  console.log("f2 is called");
}
f2();
