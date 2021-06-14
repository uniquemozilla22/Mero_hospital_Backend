const jwt = require("jsonwebtoken");

const adminauth = async (req, res, next) => {
  const token = req.params.token;
  jwt.verify(token, "test", (err, user) => {
    if (err) return res.sendStatus(403).end({ error: "Not a Valid Token" });
    if (user.isAdmin) {
      req.user = user;
      next();
    } else {
      res.sendStatus(403).end({ error: "Not a Admin" });
    }
  });
};

module.exports = adminauth;
