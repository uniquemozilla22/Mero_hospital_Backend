const { UserModel } = require("../../database/Schema/Schema");
const nodemailer = require("nodemailer");
const generator = require("generate-password");
const bcrypt = require("bcryptjs");
const forgetpassword = (req, res) => {
  const { email } = req.body;

  UserModel.findOne({ email }).then(async (user) => {
    if (user === null) {
      res.send("nodatafound");
    } else {
      const password = generator.generate({
        length: 10,
        numbers: true,
        uppercase: false,
      });
      // generate salt to hash password
      const salt = await bcrypt.genSalt(10);
      // now we set user password to hashed password
      user.password = await bcrypt.hash(password, salt);
      user
        .save()
        .then((usr) => {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "merohealthcustomerservices@gmail.com",
              pass: "Unique1-2",
            },
          });
          const mailOptions = {
            from: "merohealthcustomerservices@gmail.com",
            to: usr.email,
            subject: "OTP Password!",
            text:
              "Your Username is : " +
              usr.username +
              " ,Your Password is : " +
              password,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              res.send("servererror");
            } else {
              res.send("success");
            }
          });
        })
        .catch((err) => console.log(err));
    }
  });
};

module.exports = forgetpassword;
