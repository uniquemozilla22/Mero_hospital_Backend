const { Mongoose } = require("mongoose");
const { ChatRoom, UserModel } = require("../../../../database/Schema/Schema");

const createRoom = (req, res) => {

    let issucess=new Boolean()

  const participants = [req.user.id, req.body.doctorId];
  const name = "Chat1";
  const room = new ChatRoom({ name, participants });
  room.save()
  UserModel.updateOne(
    { _id: req.user.id },
    { $push: { MessageRooms: room.id } }
  )
  .then(()=>{ issucess = true} )
  .catch((err) => {
    issucess = false
  });
  UserModel.updateOne(
    { _id: req.body.doctorId },
    { $push: { MessageRooms: room.id } }
  )
  .then(()=>{issucess = true} )
  .catch((err) => {
    issucess = false
  });

  issucess?res.send("success"):res.send("error")

};

module.exports = createRoom;
