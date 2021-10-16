const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` 
    <div>
        <form action="/save" method="post">
            <label for="name"> Name: </label>
            <input type="text" id="name" name="name">
            <label for="age"> Age: </label>
            <input type="text" id="age" name="age">
            <button type="submit"> Submit Query </button>
        </form>
    </div> `);
});

app.post("/save", (req, res) => {
  let { name, age } = req.body;
  if (!name) name = "person";
  if (!age) age = "20";
  res.send(`Welcome ${name}! Your age is ${age}`);
});

app.listen(3000);
