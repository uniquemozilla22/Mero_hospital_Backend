const mongoose = require("mongoose");

const MessageModel = new mongoose.Schema({
  room:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chatroom"
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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
