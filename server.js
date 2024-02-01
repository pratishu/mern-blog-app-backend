// imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

// express
const port = process.env.port;
const app = express();
app.use(cors());
app.use(express.json());

// database
console.log("database is trying to connect");
mongoose
  .connect(process.env.mongo_uri)
  .then(() => {
    console.log("db is connected and backend is starting ");
    // app.listen
    app.listen(port || 3000, () => {
      console.log(`server is running on the port: ${port}`);
    }); // 3000 is fallback port, when .env is not setup
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.json({
    name: "This is main response from api. if you want to find data, use /api/users, /api/comments, /api/posts",
  });
});
app.use("/", routes);

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
