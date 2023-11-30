function createPromise() {
  return new Promise(function (resolve, reject) {
    // resolve({ name: "Riya sharma", email: "riya@gmailcom" });
    reject({ error: "Invalid Token", status: false });
  });
}

createPromise()
  .then(function (res) {
    console.log("then", res);
  })
  .catch(function (err) {
    console.log("catch", err);
  });

// var promiseobj = createPromise();

// promiseobj
//   .then((res) => {
//     console.log("then", res);
//   })
//   .catch((err) => {
//     console.log("catch", err);
//   });
