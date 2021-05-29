const { UserModel } = require("../../database/Schema/Schema");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  let { username, password, email, name } = req.body;
  let isDoctor = false;
  let check_user = false;
  UserModel.findOne({ username })
    .then((user) => {
      check_user = true;
    })
    .catch((err) => {
      res.end("Server Error" + err);
    });

  if (check_user) {
    res.end("User already exists with that username! Login with the username");
  } else {
    const user = new UserModel({ username, password, email, name, isDoctor });

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);

    user
      .save()
      .then(() => {
        res.status(200).end("Registration successfull ! Now you can login");
      })
      .catch((err) => {
        res.end(err);
      });
  }
};

module.exports = register;
