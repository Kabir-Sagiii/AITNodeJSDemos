// function f1(fn) {
//   console.log("f1 is called");
// }

// function f2() {
//   console.log("f2 is called");
// }

// f1(f2);

function f1(fn) {
  console.log("f1 is called");
}

f1(function f3() {
  console.log("f3 is a callback function");
});

f1(function () {
  console.log("Anonymous is a callback function");
});

f1(() => {
  console.log("Arrow is a Callback function");
});
