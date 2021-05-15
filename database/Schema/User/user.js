const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    name :{
        type: String,
        requrired: true,
    },
    email: {
        type: String,
        requrired: true,
    },
    phone:{
        type: String,
        requrired: false,
    },
    isDoctor:{
        type: Boolean,
        requrired: true,
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
