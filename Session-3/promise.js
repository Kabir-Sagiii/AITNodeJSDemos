var promiseObject = new Promise(function (resolve, reject) {
  //   resolve("Raj Sinha");
  //   resolve(898989);
  //   resolve({
  //     name: "Sagar",
  //     city: "Delhi",
  //   });

  //   reject("Error data");
  //   reject(404);
  reject({
    msg: "error while loading",
    status: false,
  });
});

console.log(promiseObject);
