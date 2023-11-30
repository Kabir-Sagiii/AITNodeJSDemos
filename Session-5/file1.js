function f1() {
  var price = 70;
  var qty = 5;
  var totalAmount = price * qty;
  console.log("Total Amount is : ", totalAmount);
  console.log("f1() is called");
}

function f2() {
  console.log("f2() is called");
}

function f0() {
  console.log("F0 is called");
}

f0();

var city = "Mumbai";

module.exports = { f1, f2, city };
