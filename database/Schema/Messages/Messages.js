const mongoose = require("mongoose");

const MessageModel = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  message: {
    type: String,
    requried: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("message", MessageModel);
