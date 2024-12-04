async function fn() {
  for (var i = 0; i < 10000; i++) {
    console.log("");
  }
  console.log("fn done with exection");
}

fn();
console.log("Working");
