const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
    name :{
        firstname: String,
        lastname:String,
        middlename: String,
    },
    email: String,
    phone:{
        primary:Int32Array,
        secondary:Int32Array
    },
    contact:{
        billing:String,
        address:String,
    }

})

module.exports = UserSchema
