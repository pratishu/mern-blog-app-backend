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
  res.json({
    msg: "this is not proper route for API, use /user/adduser or /article/getAllArticles",
  });
});

// user routes
router.post("/user/adduser", adduser);
router.get("/user/removeuser", removeuser);
router.get("/user/updateuser", updateuser);
router.get("/user/getalluser", getalluser);
router.get("/user/getsingleuser", getsingleuser);

// article routes
router.post("/article/createArticle", addArticle);
router.delete("/article/removeArticle/:id", removeArticle);
router.get("/article/getAllArticles", getAllArticles);
router.patch("/article/updateArticle/:id", updateArticle);
router.get("/article/getSingleArticle/:id", getSingleArticle); // currently post, get later when getting article with url

router.get("/random", (req, res) => {
  res.status(200).send("this is not a good address");
});

module.exports = router;
