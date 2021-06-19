const { UserModel } = require("../../database/Schema/Schema");

const fetchDoctor = (req, res) => {
  UserModel.find({ isDoctor: true })
    .populate("DoctorId categoryId MessageRooms")
    .select("-password")
    .then((doctors) => {
      res.send(doctors);
    })
    .catch((err) => {
      res.status(403).send({ error: err });
    });
};

module.exports = fetchDoctor;
