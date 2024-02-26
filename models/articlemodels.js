const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Articles", ArticleSchema); // now Article model will be available to work in controllers
