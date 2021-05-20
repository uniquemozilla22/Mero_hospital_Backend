const {Appointments} =require("../../../database/Schema/Schema")



const appointments_all =(req,res)=>{
     Appointments.find({user:req.user.id})
     .then(appointments=>{
         res.send(appointments)
     })
     .catch(err=>{
         res.send({error:"There is a server error in fetching appointments : "+err})
     })


}


module.exports=appointments_all