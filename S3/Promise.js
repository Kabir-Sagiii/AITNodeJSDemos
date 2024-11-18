var promise = new Promise(function (resolve, reject) {
  //   resolve({ name: "sagar", city: "Delhi" });
  reject({ ok: false, error: "something went wrong" });
});

// console.log(promise);

promise
  .then(function (successdata) {
    console.log("then is called");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("catch is called");
    console.log(errordata);
  });
