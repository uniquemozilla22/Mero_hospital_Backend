const {UserModel} = require('../../database/Schema/Schema')
const bcrypt = require("bcryptjs")


const login = async (req,res)=>{

    const message ={
        success:{username:null,password:null},
        error:{username:null,password:"Invalid Password"}
    }
    const {username , password } = req.body

    const user = await UserModel.findOne({username: username})
    if(user)
    {
        const validPassword = await bcrypt.compare(password, user.password);

        if(validPassword)
        {
            message.success.username =username
            message.success.password= password
            message.error.password=null
            message.error.username=null
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

module.exports=login