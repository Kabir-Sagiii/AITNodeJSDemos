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

function f3(f2data) {
  var promise = new Promise(function (resolve, reject) {
    resolve({
      ...f2data,
      f3: "f3 is called",
    });
  });
  return promise;
}

async function getData() {
  var f1data = await f1();
  var f2data = await f2(f1data);
  var f3data = await f3(f2data);

  console.log(f3data);
}

getData();
