const register = require("./register/register.js");
const { login, user_data, logout, updateUser } = require("./login/login.js");
const auth = require("../services/middleware/authmiddileware.js");
const jwt = require("jsonwebtoken");
const categories = require("./categoryDoctor/categoryDoctor.js");
const {
  AppointmentPost,
  UserAllAppointment,
  UserFeildAppointment,
} = require("./appointments/appointment.js");

// for regitering the User in the application
const routes = (router) => {
  router.post("/register", register);
  router.post("/login", login);
  router.get("/user_data:token", auth, user_data);
  router.get("/logout:token", auth, logout);
  router.get("/categories", categories);
  router.post("/appointments:token", auth, AppointmentPost);
  router.get("/user_appointment:token", auth, UserAllAppointment);
  router.get("/userfeildappointment:token", auth, UserFeildAppointment);
  router.post("/editprofile:token", auth, updateUser);
};

module.exports = routes;
