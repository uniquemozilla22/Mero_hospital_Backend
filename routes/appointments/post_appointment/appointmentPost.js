const { Appointments } = require("../../../database/Schema/Schema");

const AppointmentPost = (req, res) => {
  const { date, feild } = req.body;
  const appointment = new Appointments({ user: req.user.id, date, feild });
  appointment
    .save()
    .then((data) => {
      res.send({ success: true });
    })
    .catch((err) => {
      res.send({ error: "There is a system error try again" });
    });
};

module.exports = AppointmentPost;
