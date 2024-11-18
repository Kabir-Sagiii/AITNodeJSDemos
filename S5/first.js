function f1() {
  console.log("f1 is called");
}

var username = "Yash Raj";

// module.exports = f1
// module.exports = { f1, username };

module.exports = [f1, username];
