const mongoose = require("mongoose");

const ReportsSchema = new mongoose.Schema({
  ID: {
    default: mongoose.Types.ObjectId,
  },
  report: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Reports", ReportsSchema);
