const {UserModel} = require('../../database/Schema/Schema')
const bcrypt = require("bcryptjs")
const jwt = require ('jsonwebtoken')


const login = async (req,res)=>{

    const message ={
        success:null,
        error:{username:null,password:null}
    }
    const {username , password } = req.body

    const user = await UserModel.findOne({username: username})
    if(user)
    {
        const validPassword = await bcrypt.compare(password, user.password);

        if(validPassword)
        {
            
            message.error.password=null
            message.error.username=null

            const token = jwt.sign({email:user.email, id : user._id, isDoctor:user.isDoctor},'test',{expiresIn:'1h'})

            message.success={result:user,token}
            res.json(message)

        }
        else{
            message.error.username=null
            message.error.password="Invalid Password"
            res.json(message)
        }
    }
    else{
        message.error.username="Invalid Username"
        message.error.password=null
        res.json(message)
    }
}


const user_data=async (req,res)=>{
     UserModel.findById(req.user.id)
        .then(user=>{
            res.json(user)
        })
        .catch(e=>{
            res.status(404).json({error:"Data not Found ! Login again: "+ e})
        })
   
}


const logout= (req,res)=>{
    jwt.destroy(req.params.token)
    .then(()=>{
        req.destroy();
        res.json({success:"The user has logged out"})
    })
    .catch(err=>{
        res.json({error:"Error While logging out the system."})
    })
    console.log(req.params.token)

}


const updateUser =(req,res)=>{
    const {name , email } = req.body.data
            UserModel.updateOne({_id:req.user.id},{$set:{name, email}})
            .then((user)=>{
                UserModel.findOne({_id:req.user.id})
                .then((user)=>{
                    res.send({success:"The data has been updated"})
                })
            })
            .catch(error=>{
                res.send({success:"Server Error! Data not updated"})

            })
        

            
      
}


module.exports={login, user_data,logout,updateUser}