const fs = require("fs");

function createFolder(res) {
  fs.mkdir("./NodeJS", (error) => {
    if (error) {
      res.end("<h2 style='color:red;'>Failed to create Folder</h2>");
    } else {
      res.end("<h2 style='color:green;'>Successfully New Folder Created</h2>");
    }
  });
}

function deleteFolder(res) {
  fs.rmdir("./NodeJS", (error) => {
    if (error) {
      res.end("<h2 style='color:red;'>Failed to delete Folder</h2>");
    } else {
      res.end(
        "<h2 style='color:green;'>Successfully  Folder Removed /Deleted</h2>"
      );
    }
  });
}

module.exports = { createFolder, deleteFolder };
