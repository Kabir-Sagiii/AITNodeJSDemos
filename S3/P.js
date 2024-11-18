function f1() {
  return new Promise((resolve, reject) => {
    resolve({ f1: "f1 is called" });
  });
}
function f2(data) {
  return new Promise((resolve, reject) => {
    resolve({
      ...data,
      f2: "f2 is called",
    });
  });
}
function f3(data) {
  return new Promise((resolve, reject) => {
    resolve({
      ...data,
      f3: "f3 is called",
    });
  });
}

// async function getData() {
//   var res1 = await f1();
//   var res2 = await f2(res1);
//   var res3 = await f3(res2);

//   console.log(res3);
// }
// getData();

f1()
  .then((res) => {
    return f2(res);
  })
  .then((res) => {
    return f3(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch(() => {});
