const URI = require("./databaseUser/UserBase.js").mongooseURI;

const connection = async (mongoose) => {
  return await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection sucessful");
    })
    .catch((err) => {
      console.log("Error:" + err);
    });
};

module.exports = connection;
