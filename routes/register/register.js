const {UserModel} = require('../../database/Schema/Schema')
const bcrypt = require("bcryptjs");

const register =async (req,res)=>{

    let {username,password,email} = req.body


    const user = new UserModel({username,password,email })

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    user.password = await bcrypt.hash(user.password, salt);

    user.save()
    .then(()=>{
    res.status(200).end('Registration successfull ! Now you can login')
    })
    .catch(err=>{res.end(err)})
}

module.exports = register