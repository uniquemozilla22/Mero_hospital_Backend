const register = require("./register/register.js")
const {login,user_data} = require('./login/login.js')
const auth = require('../services/middleware/authmiddileware.js')

// for regitering the User in the application
const routes =(router)=>{
    router.post("/register",register)
    router.post("/login",login)
    router.get("/user_data:token",auth,user_data)
}

module.exports=routes
