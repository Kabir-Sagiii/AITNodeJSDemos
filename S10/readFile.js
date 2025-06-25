const fs = require("fs");

function readFile(fileName, res) {
  fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
      res.end(`Failed to Read Content ${fileName}`);
    } else {
      res.end(data);
    }
  });
}

module.exports = readFile;
