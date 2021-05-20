const mongoose = require("mongoose")

const Appointment = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"user"
    },
    feild:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"category_doctor"
    },
    date:{
        type:Date,
        required:true,
    }

})

module.exports=mongoose.model("appointment", Appointment)