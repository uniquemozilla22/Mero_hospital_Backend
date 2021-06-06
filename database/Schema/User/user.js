const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    requrired: true,
  },
  email: {
    type: String,
    requrired: true,
  },
  phone: {
    type: String,
    requrired: false,
  },
  isDoctor: {
    type: Boolean,
    requrired: true,
  },
  DoctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category_doctor",
  },
  address: {
    type: String,
    requrired: false,
  },
  password: {
    type: String,
    requrired: true,
  },
  username: {
    type: String,
    requrired: true,
  },
  MessageRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "chatroom" }],
});

module.exports = mongoose.model("user", UserSchema);
