const fs = require("fs");

// fs.mkdir("./JS", (error) => {
//   if (error) {
//     console.log("Failed to create Folder");
//   } else {
//     console.log("Successfully Created Folder");
//   }
// });

fs.rmdir("./NodeJS", (err) => {
  if (err) {
    console.log("Failed to remove or delete folder");
  } else {
    console.log("Successfully Removed Folder");
  }
});
