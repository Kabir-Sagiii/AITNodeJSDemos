function f1() {
  return {
    f1: "f1 is called",
  };
}

function f2(f1callback) {
  var f1Obj = f1callback(); //f1()

  var f2Obj = {
    ...f1Obj,
    f2: "f2 is called",
  };

  return f2Obj;
}

function f3(f2callback) {
  var f2obj = f2callback(f1); // f2(f1)

  var f3obj = {
    ...f2obj,
    f3: "f3 is called",
  };

  console.log(f3obj);
}

f3(f2);
