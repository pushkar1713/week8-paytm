const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeaders = req.headers.authorzations;

  if (!authHeaders || authHeaders.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeaders.split(" ")[1];

  try {
    const decodedId = jwt.verify(token, JWT_SECRET);
    req.userId = decodedId.userId;
  } catch (err) {
    return res.status(403).json({});
  }
};

module.exports = {
  authMiddleware,
};
