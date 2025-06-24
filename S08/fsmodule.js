//import file system module
const fs = require("fs");

//Create a file
// fs.writeFile("videos.text", "", (error) => {
//   if (error) {
//     console.log("Failed to create a file");
//   } else {
//     console.log("file created successfully");
//   }
// });

//remove the file
// fs.unlink("home.html", (error) => {
//   if (error) {
//     console.log("Failed to delete or remove File");
//   } else {
//     console.log("File Removed Successfully");
//   }
// });

// fs.mkdir("assests", (error) => {
//   if (error) {
//     console.log("Failed to create Folder called Models");
//   } else {
//     console.log("Folder Created");
//   }
// });

// fs.rmdir("Models", (error) => {
//   if (error) {
//     console.log("Failed to remove Folder ");
//   } else {
//     console.log("Folder Removed");
//   }
// });

// fs.rename("model", "my-model", (error) => {
//   if (error) {
//     console.log("Failed to rename File");
//   } else {
//     console.log("File Renamed");
//   }
// });

// fs.readFile("index.html", "utf-8", (error, data) => {
//   if (error) {
//     console.log("Failed to read content");
//   } else {
//     console.log(data);
//   }
// });

fs.statsss("index.html", (error, stat) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stat);
  }
});
