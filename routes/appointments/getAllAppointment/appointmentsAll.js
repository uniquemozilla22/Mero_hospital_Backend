const { Appointments } = require("../../../database/Schema/Schema");

const appointments_all = (req, res) => {
  Appointments.find({ user: req.user.id })
    .populate("feild")
    .select("-user")
    .then((appointments) => {
      res.send(appointments);
    })
    .catch((err) => {
      res.send({
        error: "There is a server error in fetching appointments : " + err,
      });
    });
};

const appointment_all_admin = (req, res) => {
  Appointments.find()
    .populate("feild")
    .populate("user")
    .then((appointments) => {
      res.send(appointments);
    })
    .catch((error) =>
      res.sendStatus(403).send("Error While fetching appointments")
    );
};

module.exports = { appointments_all, appointment_all_admin };
