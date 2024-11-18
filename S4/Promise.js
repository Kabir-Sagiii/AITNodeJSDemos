let promise = new Promise((resolve, reject) => {
  resolve({ name: "xyz", city: "hyd" });
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {});
