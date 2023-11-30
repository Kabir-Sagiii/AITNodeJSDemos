function createPromise() {
  return new Promise(function (resolve, reject) {
    // resolve({ name: "Riya sharma", email: "riya@gmailcom" });
    reject({ error: "Invalid Token", status: false });
  });
}

createPromise().then(
  (res) => {
    console.log("res", res);
  },
  (err) => {
    console.log("err", err);
  }
);

// var promiseObj = createPromise();

// promiseObj.then(
//   (success) => {
//     console.log("success", success);
//   },
//   (error) => {
//     console.log("error", error);
//   }
// );
