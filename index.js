const express = require("express");
const app = express();

// Connection with the database
require("./database/connection.js");



app.listen(3000, () => {
  console.log("Applcation has started at port 3000");
});
