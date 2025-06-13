var fs = require("fs");

fs.writeFile("demo.txt", "hello i am demo file", (error) => {
  console.log("file created");
});
