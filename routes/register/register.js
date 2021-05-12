const {UserModel} = require('../../database/Schema/Schema')

const register =(req,res)=>{

    let {username,password,email} = req.body

    const user = new UserModel({username,password,email })

    user.save()
    .then(()=>{
    res.end('Registration successfull ! Now you can login')
    })
    .catch(err=>{res.end(err)})
}

module.exports = register