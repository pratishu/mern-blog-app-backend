const express = require("express");
require("dotenv").config();
const port = process.env.PORT;

const app = express();

const person1 = {
  name: "prat",
  age: 23,
  address: "somewhere on planet",
};

app.get("/", (req, res) => {
  res.json(person1);
});

app.listen(port || 3000); // 3000 is fallback port, when .env is not setup
