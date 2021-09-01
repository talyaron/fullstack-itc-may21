const { readAllUsers } = require('../models/users');
const jwt = require('jwt-simple');
const { secret } = require('../secret/secret');

export function sendCookieUser(req, res, next) {
      const { email } = req.body;
      const allUsers = readAllUsers();
      const user = allUsers.find((user) => user.email === email);  
      const cookie = user;  
      var token = jwt.encode(cookie, secret);
      res.cookie('userITC', token, { maxAge: 900000000000, httpOnly: true });
      console.log(user)

    next();
  };
