function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve({ name: "Riya sharma", email: "riya@gmailcom" });
    // reject({ error: "Invalid Token", status: false });
  });
}

// async function handlePromise() {
//   var promiseobj = createPromise();
//   var res = await promiseobj;
//   console.log(res);
// }

async function handlePromise() {
  try {
    var res = await createPromise();
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
}

handlePromise();
