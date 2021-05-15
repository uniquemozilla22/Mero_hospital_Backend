const jwt = require('jsonwebtoken');


const auth = async(req,res,next) =>{

    const token = req.params.token
  jwt.verify(token,"test",(err, user)=>{
        if(err) return res.status(403).json({error:"Not a Valid Token"})
        req.user = user
        next()
    })
}

module.exports= auth