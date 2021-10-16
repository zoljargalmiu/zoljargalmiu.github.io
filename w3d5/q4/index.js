const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static(path.join(__dirname, "../q2", "css")));
app.use("/asset", express.static(path.join(__dirname, "../q3", "asset")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let resFile = path.join(__dirname, "../q3/asset", "night.html");
  if (6 <= hour && hour <= 18)
    resFile = path.join(__dirname, "../q3/asset", "day.html");
  res.sendFile(resFile);
});

app.get("/output", (req, res) => {
  let { name, age } = req.query;
  if (!name) name = "person";
  if (!age) age = "20";
  res.send(`Welcome ${name}! Your age is ${age}`);
});

app.post("/save", (req, res) => {
  let { name, age } = req.body;
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000);
