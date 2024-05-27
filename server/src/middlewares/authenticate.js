const { errorResponse } = require("../utils/responseUtil");
const { textMessages } = require("../utils/textMessages");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const jwt = require("jsonwebtoken");

  if (!token) {
    return errorResponse(res, textMessages.UNAUTHORIZED, 401); // No token
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return errorResponse(res, textMessages.INVALID_TOKEN, 403); // Invalid token
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
