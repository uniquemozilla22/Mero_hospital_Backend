const { Doctor, UserModel } = require("../../../../database/Schema/Schema");

const doctorList = (req, res) => {
  const { categoryId } = req.params;
  UserModel.find({categoryId}).populate('categoryId').populate('DoctorId')
  .then(data=>{
      res.send(data)
  })
}

module.exports = doctorList;
