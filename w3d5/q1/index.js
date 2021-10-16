const express = require("express");
const app = express();

//http://localhost:3000/?name=Zoloo&age=28

app.get("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) name = "person";
  if (!age) age = "20";
  res.send(`Welcome ${name}! Your age is ${age}`);
});
app.listen(3000);
