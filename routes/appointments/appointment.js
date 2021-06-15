module.exports = {
  AppointmentPost: require("./post_appointment/appointmentPost.js")
    .AppointmentPost,
  UserAllAppointment: require("./getAllAppointment/appointmentsAll")
    .appointments_all,
  AdminAllAppointment: require("./getAllAppointment/appointmentsAll")
    .appointment_all_admin,
  UserFeildAppointment: require("./getAllAppointment/getUserFeildAppointments.js"),
  DeleteAppointment: require("./post_appointment/appointmentPost.js")
    .AppointmentDelete,
};
