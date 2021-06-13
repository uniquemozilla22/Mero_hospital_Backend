const jwt = require("jsonwebtoken");

const adminauth = async (req, res, next) => {
  const token = req.params.token;
  jwt.verify(token, "test", (err, user) => {
    if (err) return res.status(403).json({ error: "Not a Valid Token" });
    if (!user.isAdmin) {
      res.send(403), json({ error: "Not a Admin" });
    } else {
      req.user = user;
      next();
    }
  });
};

module.exports = adminauth;
