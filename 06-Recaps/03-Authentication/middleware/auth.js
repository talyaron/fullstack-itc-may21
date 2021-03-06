const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) {
    res.status(401).send('Must provide a token');
    return;
  }
  const token = authHeaders.replace('Bearer ', '');

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send('Invalid Token');
      return;
    }
    req.decoded = decoded;
    next();
  });
};
