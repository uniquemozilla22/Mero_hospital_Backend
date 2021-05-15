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
    
    try{
        const user_datas = UserModel.findOne({id:req.userid})

        if(user_datas)
        {
            res.status(200).json({user_datas})
        }
        else{
            res.status(404).json({error:"Data not Found ! Login again"})
        }
    }
    catch(e){
        res.status(500).json({error:e})
    }
   
}

module.exports={login, user_data}