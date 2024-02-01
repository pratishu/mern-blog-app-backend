const express = require("express");
const {
  adduser,
  updateuser,
  removeuser,
  getalluser,
  getsingleuser,
} = require("../controllers/userController");
const {
  addArticle,
  removeArticle,
  getAllArticles,
  updateArticle,
  getSingleArticle,
} = require("../controllers/postController");
// const postcontroller = require("../controllers/postController");
// const commentController = require("../controllers/commentController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "some name" });
});
router.get("/user/adduser", adduser);
router.get("/user/removeuser", removeuser);
router.get("/user/updateuser", updateuser);
router.get("/user/getalluser", getalluser);
router.get("/user/getsingleuser", getsingleuser);
router.get("/article/createArticle", addArticle);
router.get("/article/removeArticle", removeArticle);
router.get("/article/getAllArticles", getAllArticles);
router.get("/article/updateArticle", updateArticle);
router.get("/article/getSingleArticle", getSingleArticle);

router.get("/random", (req, res) => {
  res.status(200).send("this is not a good address");
});

module.exports = router;
