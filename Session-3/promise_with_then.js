var resolvePromise = new Promise(function (resolve, reject) {
  resolve({ name: "Riya Sharma", gender: "female" });
});

var rejectPromise = new Promise(function (resolve, reject) {
  reject({ msg: "error while storing", status: false });
});

rejectPromise.then(
  function (success) {
    console.log("success", success);
  },
  function (error) {
    console.log("error", error);
  }
);

resolvePromise.then(
  function (success) {
    console.log("success", success);
  },
  function (error) {
    console.log("error", error);
  }
);
