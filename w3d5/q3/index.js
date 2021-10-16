const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static(path.join(__dirname, "../q2", "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);
  let resFile = path.join(__dirname, "asset", "night.html");
  if (6 <= hour && hour <= 18)
    resFile = path.join(__dirname, "asset", "day.html");
  res.sendFile(resFile);
});

app.post("/save", (req, res) => {
  let { name, age } = req.body;
  if (!name) name = "person";
  if (!age) age = "20";
  res.send(`Welcome ${name}! Your age is ${age}`);
});

app.listen(3000);
