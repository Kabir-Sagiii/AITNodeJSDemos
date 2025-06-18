function f1(callback) {
  console.log("f1 is called");
  callback("f1 is executed");
}

function f2(inputData, callback) {
  console.log(inputData, "f2 is called");
  callback("f2 is executed");
}

function f3(inputData) {
  console.log(inputData, "f3 is called");
}

f1((data) => {
  f2(data, (data) => {
    f3(data);
  });
}); //callback hell
