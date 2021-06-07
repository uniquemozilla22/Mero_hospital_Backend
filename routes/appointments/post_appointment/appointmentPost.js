const { Appointments } = require("../../../database/Schema/Schema");

const AppointmentPost = (req, res) => {
  const { date, feild } = req.body;

  const validateAppointment = Appointments.find({date,feild})

  validateAppointment.then((appoint) =>{
    if(appoint.length>=9)
    {
      res.send({ error: "The Maximum Limit Reached for this feild for the date: "+new Date(date).toString() });
    }
    else{
      const appointment = new Appointments({ user: req.user.id, date, feild });
      appointment
        .save()
        .then((data) => {
          res.send({ success: true });
        })
        .catch((err) => {
          res.send({ error: "There is a system error try again"+err });
        });
    }
  })
};

const AppointmentDelete = (req, res) => {
  const { appointment_id } = req.body;

  const remove_appointment = Appointments.remove({ _id: appointment_id });

  remove_appointment
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { AppointmentPost, AppointmentDelete };
