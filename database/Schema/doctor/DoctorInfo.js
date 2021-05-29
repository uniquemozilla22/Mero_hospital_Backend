const mongoose = require("mongoose");

const Doctorinfo = mongoose.Schema({
  feild: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "category_doctor",
  },
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
