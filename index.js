const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const Pusher =require("pusher")


// using the middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/",router)



// Connection with the database
require("./database/connection.js")(mongoose);




// routes for the application
require("./routes/routes")(router)


app.listen(process.env.PORT || 8000);