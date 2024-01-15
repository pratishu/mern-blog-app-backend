const express = require("express");
// const usercontroller = require("../controllers/userController");
// const postcontroller = require("../controllers/postController");
// const commentController = require("../controllers/commentController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "some name" });
});

module.exports = router;
