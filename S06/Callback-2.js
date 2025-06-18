function f1() {
  console.log("f1 is called");
  return "f1 executed";
}

function f2(inputData) {
  console.log(inputData, "f2 is called");
  return "f2 executed";
}

function f3(inputData) {
  console.log(inputData, "f3 is called");
}

var x = f1();
var y = f2(x);
f3(y);
