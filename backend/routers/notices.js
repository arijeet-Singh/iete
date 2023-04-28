const router = require("express").Router();
const Notices = require("../models/Notices");
router.post("/addnotice", async (req, res) => {
  try {
    const add = new Notices({
      notice: req.body.notice,
    });
    const notice = add.save();
    res.status(200).json(notice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/getnotices", async (req, res) => {
  try {
    Notices.find()
      .then((notices) => {
        res.status(200).json(notices);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
