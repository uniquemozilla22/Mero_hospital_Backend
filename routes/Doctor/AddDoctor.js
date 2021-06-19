const DoctorInfo = require("../../database/Schema/Schema").Doctor;

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
};

module.exports = AddDoctor;
