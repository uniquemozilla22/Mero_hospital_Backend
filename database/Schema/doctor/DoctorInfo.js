const mongoose = require("mongoose");

const Doctorinfo = mongoose.Schema({
  experience: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("doctor", Doctorinfo);
