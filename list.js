const fs = require("fs");

fs.readdir("./assets", (err, files) => {
  if (err) throw err;

  console.log("reading files complete");
  console.log(files);
});

console.log("started reading files");
