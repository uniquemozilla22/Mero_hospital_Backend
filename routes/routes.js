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
const { UserModel, CategoryDoctor } = require("../database/Schema/Schema.js");
const { postMesssage, getMessages } = require("./chat/messages/messages.js");
const DoctorInfo = require("../database/Schema/doctor/DoctorInfo.js");

// for regitering the User in the application
const routes = (router) => {
  // For admin
  router.get("/appointmentsall:token", adminauth, AdminAllAppointment);
  router.get("/doctorall:token", adminauth, (req, res) => {
    UserModel.find({ isDoctor: true })
      .populate("DoctorId categoryId MessageRooms")
      .select("-password")
      .then((doctors) => {
        res.send(doctors);
      })
      .catch((err) => {
        res.status(403).send({ error: err });
      });
  });
  router.post("/addcategories:token", adminauth, (req, res) => {
    const { name, image, description } = req.body;
    const category = new CategoryDoctor({ name, image, description });

    category
      .save()
      .then((category) => {
        res.status(200).end("success");
      })
      .catch((err) => {
        res.status(200).send("Error: " + err);
      });
  });
  router.post("/adddoctor:token", adminauth, (req, res) => {
    const {
      categoryId,
      name,
      phone,
      email,
      city,
      username,
      password,
      image,
      degree,
      experience,
    } = req.body.doctorData;

    const Doctor = new DoctorInfo({ experience, degree, image });

    Doctor.save()
      .then((doc) => {
        const userDoctor = new UserModel({
          categoryId,
          name,
          phone,
          email,
          isDoctor: true,
          DoctorId: doc.id,
          address: city,
          username,
          password,
        });

        userDoctor
          .save()
          .then((userDoctor) => {
            res.send("success");
          })
          .catch((err) => {
            res.send("error");
          });
      })
      .catch((err) => {
        res.send("error");
      });
  });

  router.post("/edit_category:token", adminauth, (req, res) => {
    const { name, description, image, _id } = req.body;
    CategoryDoctor.updateOne({ _id }, { $set: { name, description, image } })
      .then((cate) => {
        res.send("success");
      })
      .catch((err) => {
        res.send("error");
      });
  });

  router.post("/delete_category:token", adminauth, (req, res) => {
    const { _id } = req.body;

    CategoryDoctor.deleteOne({ _id })
      .then((sucess) => {
        res.send("success");
      })
      .catch((err) => {
        res.send("error");
      });
  });

  // For User and Doctor
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
};

module.exports = routes;
