const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  ID: {
    default: mongoose.Types.ObjectId,
  },
  email: {
    type: String,
    
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
