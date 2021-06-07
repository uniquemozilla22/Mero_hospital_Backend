const URI = require("./databaseUser/UserBase.js").mongooseURI;
const Pusher = require("../services/pusher.js");
const { UserModel } = require("./Schema/Schema");

const connection = (mongoose) => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const database = mongoose.connection;
  database.once("open", () => {
    console.log("Database connection sucessful");

    const messageCollection = database.collection("messages");
    const changeStream = messageCollection.watch();
    changeStream.on("change", (change) => {
      if (change.operationType === "insert") {
        let data = change.fullDocument;
        UserModel.findById(data.user)
          .select("name DoctorId")
          .populate({ path: "DoctorId", select: "image" })
          .then((user) => {
            let messagefetched = {
              _id: data._id,
              text: data.message,
              createdAt: new Date(data.timestamp),
              user: {
                _id: user._id,
                name: user.name,
                avatar: user.DoctorId?.image,
              },
            };
            Pusher.trigger("messages", "inserted", {
              ...messagefetched,
            });
          })
          .catch((error) => {
            console.log("database Message User error");
          });

        
      }
    });
  });
};

module.exports = connection;
