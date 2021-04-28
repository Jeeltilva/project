const mongoose = require("mongoose");

const lawBookSchema = new mongoose.Schema({
  filename: {
    type: String,
  },
  contentType: {
    type: String,
  },
  originalname: {
    type: String,
  },
  size: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const Lawbook = mongoose.model("Lawbook", lawBookSchema);

module.exports = Lawbook;
