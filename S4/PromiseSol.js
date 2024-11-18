function f1() {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      f1: "f1 is called",
    });
  });
  return promise;
}

function f2(f1data) {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      ...f1data,
      f2: "f2 is called",
    });
  });
  return promise;
}

f1()
  .then(function (res) {
    return f2(res);
  })
  .then((f2data) => {
    return f3(f2data);
  })
  .then((f3data) => {
    console.log(f3data);
  })
  .catch(function (error) {});

function f3(f2data) {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      ...f2data,
      f3: "f3 is called",
    });
  });
  return promise;
}
