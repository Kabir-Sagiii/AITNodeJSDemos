function f1(callback) {
  console.log("f1 is called");
  callback("f1 is executed");
}
function f2(data, callback) {
  console.log(data, "f2 is called");
  callback("F2 is executed");
}
function f3(data, callback) {
  console.log(data, "f3 is called");
  callback("F3 is Executed");
}
function f4(data, callback) {
  console.log(data, "f4 is called");
  callback("F4 is Executed");
}
function f5(data) {
  console.log(data, "f5 is called");
}

f1((data) => {
  f2(data, (data) => {
    f3(data, (data) => {
      f4(data, (data) => {
        f5(data);
      });
    });
  });
});
