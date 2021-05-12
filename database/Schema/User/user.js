const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    name :{
        type: String,
        requrired: false,
    },
    email: {
        type: String,
        requrired: true,
    },
    phone:{
        type: String,
        requrired: false,
    },
    contact:{
        type: String,
        requrired: false,
    },
    password:{
        type: String,
        requrired: true,
    },
    username:{
        type: String,
        requrired: true,
    }

})

module.exports = mongoose.model("user",UserSchema)
