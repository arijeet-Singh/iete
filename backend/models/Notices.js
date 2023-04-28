const mongoose = require("mongoose");

const NoticesSchema = new mongoose.Schema({
  ID: {
    default: mongoose.Types.ObjectId,
  },
  notice: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Notices", NoticesSchema);
