const mongoose = require('mongoose');

const CategoryDoctor =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }    
})

module.exports = mongoose.model("category_doctor",CategoryDoctor)
