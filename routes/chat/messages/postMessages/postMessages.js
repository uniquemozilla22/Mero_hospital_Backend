const { Messages } = require("../../../../database/Schema/Schema")

const PostMessage = (req,res)=>{
    const {message,room} = req.body
    const messages ={
      message,
      timestamp:new Date(),
      room,
      user:req.user.id
    }

    const MessageSync = new Messages({...messages})

    MessageSync.save()
    .then(()=>{
      res.send("success")
    })
    .catch((error)=>{
      res.send("error")
    })

  }

module.exports= PostMessage