const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Matt \n");
questionApp.stdin.write("Manchester UK \n");
questionApp.stdin.write("Useful creature \n");

questionApp.stdout.on("data", data => {
  console.log(`from the questionApp: ${data}`);
});

questionApp.stdout.on("close", () => {
  console.log("questionApp process exited");
});
