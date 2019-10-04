const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("x-server-date", new Date());
  return next();
});

app.get("/", (req, res) => res.send("Hello from web server"));
app.get("/time", (req, res) => res.send(new Date().toString()));
app.get("/hello", (req, res) => {
  if (!req.query.name) {
    return res.status(404).end();
  }
  return res.send(`Hello, ${req.query.name}`);
});
app.get("/user/:name", (req, res) =>
  res.send(`Userprofile of ${req.params.name}`)
);

app.listen(3000, () => console.log("server running..."));
