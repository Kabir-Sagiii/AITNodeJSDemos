function f1(f1Para) {
  console.log("f1 is called");
  f1Para(f3); // f2
}

function f2(f2Para) {
  console.log("f2 is called");
  f2Para(); // f3
}

function f3() {
  console.log("f3 is called");
}

f1(f2);
