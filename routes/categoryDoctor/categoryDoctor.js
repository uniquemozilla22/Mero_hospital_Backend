const CategoryDoctor = require("../../database/Schema/Schema").CategoryDoctor


const categoryDoctor=(req,res)=>{
    CategoryDoctor.find()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.status(200).json(error)
    })
   
}

module.exports=categoryDoctor
