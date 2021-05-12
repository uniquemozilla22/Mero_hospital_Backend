const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Connection with the database
require("./database/connection.js")(mongoose);
app.use(cors())

// Creating the Schemas for the Database
require("./database/Schema/Schema.js")(mongoose)


// routes for the application
require("./routes/routes")(app)


app.listen(process.env.PORT || 8000);