const router = require("express").Router();
const News = require("../models/News");

router.post("/addnews", async (req, res) => {
  try {
    const add = new News({
      news: req.body.news,
    });
    const news = add.save();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getnews", async (req, res) => {
  try {
    News.find()
      .then((news) => {
        res.status(200).json(news);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
