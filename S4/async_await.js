function getName() {
  return "Hello, Raj";
}

function myFun() {
  let promise = new Promise((resolve, reject) => {
    resolve({ name: "xyz", city: "hyd" });
    // reject({ error: "Something went" });
  });

  return promise;
}

async function getPromiseData() {
  try {
    var res = await myFun();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getPromiseData();
