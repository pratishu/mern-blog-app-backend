const addArticle = (req, res) => {
  res.status(200).json({ article: "article created" });
};

const removeArticle = (req, res) => {
  res.status(200).json({ article: "article removed" });
};
const getSingleArticle = (req, res) => {
  res.status(200).json({ article: "this is one article" });
};
const getAllArticles = (req, res) => {
  res
    .status(200)
    .json({ article: "these are all the article that you requested" });
};
const updateArticle = (req, res) => {
  res.status(200).json({ article: "article has been updated" });
};
module.exports = {
  addArticle,
  removeArticle,
  getSingleArticle,
  getAllArticles,
  updateArticle,
};
