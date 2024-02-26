const Article = require("../models/articlemodels");

// adding articles
const addArticle = async (req, res) => {
  const { title, author, body } = req.body;
  try {
    const newblog = await Article.create({ title, author, body }); // when you make a new document in collection, the db send the document in return
    res.status(200).json({ newblog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// removing articles by id
const removeArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedarticle = await Article.findOneAndDelete({ _id: id });
    if (!deletedarticle) {
      return res
        .status(400)
        .json({ error: "article is  not available with given id" });
    }
    res.status(200).json(deletedarticle);
  } catch (error) {
    console.error(error);
  }
};

// adding single articles by id
const getSingleArticle = async (req, res) => {
  // by title, later by id in url
  try {
    const { id } = req.params;
    const singlearticle = await Article.findById(id); // based on id
    res.status(200).json({ singlearticle });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getting all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ createdAt: -1 }); // createdat: -1 will sort by decending order
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// updating article by id
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const blog = await Article.findOneAndUpdate({ _id: id }, { ...req.body });
    res
      .status(200)
      .json({ message: "article has been updated", newarticle: blog });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = {
  addArticle,
  removeArticle,
  getSingleArticle,
  getAllArticles,
  updateArticle,
};
