const register = require("./register/register")

// for regitering the User in the application
const router =(router)=>{
    router.post("/register",register)
}

module.exports=router
