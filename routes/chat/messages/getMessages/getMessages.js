const { Messages } = require("../../../../database/Schema/Schema")


const getMessages = (req, res)=>{

    const {room} = req.params 
    const Message= Messages.find({room}).sort({$natural:-1}).populate({path:"user",select:"name DoctorId",populate:{path:"DoctorId",select:"image"}})

    Message.then(message=>{
        res.send(message)
    })
    .catch(err=>{
        res.send(err)
    })
}


module.exports=getMessages