const express = require("express");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "someone" });
});

app.listen(port || 3000, () => {
  console.log("app is listening to port 3002");
}); // 3000 is fallback port, when .env is not setup
