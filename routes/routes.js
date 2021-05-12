const register = require("./register/register")
const routes =(app)=>{

    // for regitering the User in the application
    app.get("/register",register)

}


module.exports=routes