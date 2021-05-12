const register = require("./register/register.js")
const login = require('./login/login.js')

// for regitering the User in the application
const routes =(router)=>{
    router.post("/register",register)
    router.post("/login",login)
}

module.exports=routes
