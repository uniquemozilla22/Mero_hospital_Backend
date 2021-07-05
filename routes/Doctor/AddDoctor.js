const DoctorInfo = require("../../database/Schema/Schema").Doctor;
const { UserModel } = require("../../database/Schema/Schema");
const bcrypt = require("bcryptjs");

const AddDoctor = (req, res) => {
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
    .then(async (doc) => {
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

      // generate salt to hash password
      const salt = await bcrypt.genSalt(10);
      // now we set user password to hashed password
      userDoctor.password = await bcrypt.hash(userDoctor.password, salt);

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
      console.log(err);
      res.send("error");
    });
};

module.exports = AddDoctor;
