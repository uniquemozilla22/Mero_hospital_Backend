module.exports = {
  AppointmentPost: require("./post_appointment/appointmentPost.js")
    .AppointmentPost,
  UserAllAppointment: require("./getAllAppointment/appointmentsAll"),
  UserFeildAppointment: require("./getAllAppointment/getUserFeildAppointments.js"),
  DeleteAppointment: require("./post_appointment/appointmentPost.js")
    .AppointmentDelete,
};
