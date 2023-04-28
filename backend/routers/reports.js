const router = require("express").Router();
const Reports = require("../models/Reports");
router.post("/addreport", async (req, res) => {
  try {
    const add = new Reports({
      report: req.body.report,
    });
    const report = add.save();
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/getreports", async (req, res) => {
  try {
    Reports.find()
      .then((reports) => {
        res.status(200).json(reports);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
