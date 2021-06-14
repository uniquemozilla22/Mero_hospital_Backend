const { Mongoose } = require("mongoose");
const { ChatRoom, UserModel } = require("../../../../database/Schema/Schema");

const createRoom = (req, res) => {
  let issucessuser = new Boolean();
  let issucessdoctor = new Boolean();

  const participants = [req.user.id, req.body.doctorId];
  const name = req.body.title;

  ChatRoom.find({ participants: participants }).then((chatroom) => {
    if (!chatroom[0]) {
      const room = new ChatRoom({ name, participants });
      room.save();
      UserModel.updateOne(
        { _id: req.user.id },
        { $push: { MessageRooms: room.id } }
      )
        .then(() => {
          issucessuser = true;
        })
        .catch((err) => {
          issucessuser = false;
        });
      UserModel.updateOne(
        { _id: req.body.doctorId },
        { $push: { MessageRooms: room.id } }
      )
        .then(() => {
          issucessdoctor = true;
        })
        .catch((err) => {
          issucessdoctor = false;
        });

      issucessdoctor && issucessuser ? res.send("success") : res.send("error");
    } else {
      res.send(chatroom);
    }
  });
};

module.exports = createRoom;
