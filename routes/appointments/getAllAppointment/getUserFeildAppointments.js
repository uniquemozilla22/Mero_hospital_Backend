
const {Appointments} =require("../../../database/Schema/Schema")


const UserFeildAppointment =(req,res)=>{
    const {feild} = req.query;

    Appointments.find({user:req.user.id,feild})
    .then((appointment)=>{
        if(appointment)
        {
            res.status(200).json(appointment)
        }
    })
    .catch(error=>{
        res.json({error:"Server Error on finding data."})
    })
}


module.exports=UserFeildAppointment