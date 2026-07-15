const { randomUUID } = require("crypto");

module.exports = function requestId(req, res, next) {
  // Generate a unique ID
  const id = randomUUID();

  // Attach it to the request object
  req.id = id;

  // Send it in the response header
  res.setHeader("X-Request-Id", id);

  // Pass control to the next middleware
  next();
};