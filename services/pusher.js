const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1215558",
    key: "402af01c65c08ef73afd",
    secret: "fd036f95ac565a638318",
    cluster: "ap2",
    useTLS: true
  });


  module.exports= pusher