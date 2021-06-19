const register = require("./register/register.js");
const { login, user_data, logout, updateUser } = require("./login/login.js");
const auth = require("../services/middleware/authmiddileware.js");
const adminauth = require("../services/middleware/adminauth.js");
const categories = require("./categoryDoctor/categoryDoctor.js");
const {
  AppointmentPost,
  UserAllAppointment,
  UserFeildAppointment,
  DeleteAppointment,
  AdminAllAppointment,
} = require("./appointments/appointment.js");
const { createRoom, fetchRoom, fetchList } = require("./chat/Room/room.js");
const { postMesssage, getMessages } = require("./chat/messages/messages.js");
const AddDoctor = require("./Doctor/AddDoctor.js");
const fetchDoctor = require("./Doctor/fetchDoctor.js");

// for regitering the User in the application
const routes = (router) => {
  // For admin
  router.get("/appointmentsall:token", adminauth, AdminAllAppointment);
  router.get("/doctorall:token", adminauth, fetchDoctor);
  router.post("/addcategories:token", adminauth, categories.addCategories);
  router.post("/adddoctor:token", adminauth, AddDoctor);
  router.post("/edit_category:token", adminauth, categories.editCategory);
  router.post("/delete_category:token", adminauth, categories.deleteCategory);

  // For User and Doctor
  router.post("/register", register);
  router.post("/login", login);
  router.get("/user_data:token", auth, user_data);
  router.get("/logout:token", auth, logout);
  router.get("/categories", categories.categoryDoctor);
  router.post("/appointments:token", auth, AppointmentPost);
  router.get("/user_appointment:token", auth, UserAllAppointment);
  router.get("/userfeildappointment:token", auth, UserFeildAppointment);
  router.post("/deleteappointment:token", auth, DeleteAppointment);
  router.post("/editprofile:token", auth, updateUser);
  router.post("/createroom:token", auth, createRoom);
  router.get("/fetchroom:token", auth, fetchRoom);
  router.get("/fetchdoctor:categoryId", fetchList);
  router.post("/newmessage:token", auth, postMesssage);
  router.get("/getmessage:room", getMessages);
};

module.exports = routes;
