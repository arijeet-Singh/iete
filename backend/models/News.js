const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  ID: {
    default: mongoose.Types.ObjectId,
  },
  news: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("News", NewsSchema);
