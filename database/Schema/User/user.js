
const UserSchema = ({mongoose})=> new mongoose.Schema({
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
    },
    password:String,
    username:String

})

module.exports = Mongoose.model("user",UserSchema)
