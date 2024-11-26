const fs = require("fs");

//Asynchronous

// fs.writeFile("./readme.txt", "This is my First File", "utf-8", (error) => {
//   if (error) {
//     console.log("Error while creating the file");
//     console.log(error);
//   } else {
//     console.log("File Created");
//   }
// });

// var res = fs.writeFileSync("./React.txt", "This is my sync function");
// console.log("file is created");

fs.readFile("./React.txt", "utf-8", (error, content) => {
  if (error) {
    console.log("Error while accessing the content");
  } else {
    console.log(content);
  }
});
