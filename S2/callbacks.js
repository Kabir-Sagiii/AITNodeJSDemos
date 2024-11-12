function f1(x) {
  x();
  console.log("f1 is called");
  x();
}

function fncallback() {
  console.log(" callback function is called");
}

f1(fncallback);

// f1(function () {
//   var a = 10;
//   var b = 20;

//   console.log(a + b);
// });

// f1(function add() {
//   var a = 30;
//   var b = 50;
//   console.log(a + b);
// });

f1(() => {
  console.log("Arrow function as a callback function");
});
