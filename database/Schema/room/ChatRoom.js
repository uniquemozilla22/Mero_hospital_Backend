const mongoose = require('mongoose')


const ChatRoom = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    participants:[mongoose.Schema.Types.ObjectID]
})

module.exports =mongoose.model('chatroom',ChatRoom)