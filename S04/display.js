const { arr } = require("./user.js");

arr.forEach((element) => {
  if (element < 400) {
    console.log(element);
  }
});
