const mongoose = require('mongoose')


const ChatRoom = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    participants:[{type:mongoose.Schema.Types.ObjectID,ref:"user"}]
})

module.exports =mongoose.model('chatroom',ChatRoom)