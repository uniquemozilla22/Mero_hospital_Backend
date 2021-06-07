const register = require("./register/register.js");
const { login, user_data, logout, updateUser } = require("./login/login.js");
const auth = require("../services/middleware/authmiddileware.js");
const categories = require("./categoryDoctor/categoryDoctor.js");
const {
  AppointmentPost,
  UserAllAppointment,
  UserFeildAppointment,
  DeleteAppointment,
} = require("./appointments/appointment.js");
const { createRoom, fetchRoom, fetchList } = require("./chat/Room/room.js");
const { UserModel, Messages } = require("../database/Schema/Schema.js");
const { postMesssage, getMessages } = require("./chat/messages/messages.js");

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
  router.post("/deleteappointment:token", auth, DeleteAppointment);
  router.post("/editprofile:token", auth, updateUser);
  router.post("/createroom:token", auth, createRoom);
  router.get("/fetchroom:token", auth, fetchRoom);
  router.get("/fetchdoctor:categoryId", fetchList);
  router.post("/newmessage:token", auth, postMesssage);
  router.get("/getmessage:room", getMessages);
  router.get("/adddoctor", (req, res) => {
    const doctor_details = {
      name: "Deepak Karki",
      email: "deepakkarki@gmail.com",
      phone: "9813135616",
      isDoctor: true,
      DoctorId: "60af9d519ced5222380740df",
      categoryId: "609fc37a3482902feac0f1a6",
      address: "Biratnagar",
      password: "deepakkarki12",
      username: "deepakkarki12",
    };

    const doctor = new UserModel({ ...doctor_details });

    doctor
      .save()
      .then((user) => {
        res.send(user);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

module.exports = routes;
