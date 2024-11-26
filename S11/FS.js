const fs = require("fs");

fs.stat("./index.html", (error, info) => {
  if (error) {
    console.log("error");
  } else {
    console.log(info);
  }
});

// fs.appendFile("./index.html", "\n<p> this para</p>", (error) => {
//   if (error) {
//     console.log("error while appnding the  new content");
//   } else {
//     console.log("Appended New Content");
//   }
// });

// fs.writeFile("./index.html", "<h2>First line</h2> <br/>", (error) => {
//   if (error) {
//     console.log("error while creating the file");
//   } else {
//     console.log("file is created");
//   }
// });

// fs.unlink("./user.java", (error) => {
//   if (error) {
//     console.log("Failed to remove the file");
//   } else {
//     console.log("file is removed");
//   }
// });
