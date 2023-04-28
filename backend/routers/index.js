const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const newsRouter = require("./news");
const noticesRouter = require("./notices");
const reportsRouter = require("./reports");
router.get("/", (req, res) => {
  res.send("Welcome");
});
router.use("/auth", authRouter);
router.use("/news", newsRouter);
router.use("/notice", noticesRouter);
router.use("/report", reportsRouter);
module.exports = router;
