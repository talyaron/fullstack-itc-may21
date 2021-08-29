const Ajv = require('ajv');
const ajv = new Ajv();
const addFormats = require('ajv-formats');
addFormats(ajv);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const { users } = require('../models/classes')


exports.validateBody = (schema) => {
  return (req, res, next) => {
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      res.status(400).send(ajv.errors[0]['message']);
      return;
    }
    next()
  };
};


exports.checkAdminAccountCreated = (req, res, next) => {
  try{
  const { admincode } = req.body;
  if(admincode && admincode ===  process.env.ADMIN_CODE){
    req.body.role = process.env.ADMIN_ROLE
    next()
  }if(admincode && admincode !=  process.env.ADMIN_CODE){
    res.status(400).send("admin code not correct")
    return
  }else{
    next()}
  }catch (e) {
    console.error(e)
}};


exports.encryptPwd = (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if(err) {
        res.status(500).send('Error Encrypting');
        return
    }
    req.body.password = hash;
    next()
  });
};

exports.decryptPwd = (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = users.users.find(user => user.email === email);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            throw new Error('Incorrect password');
          }
          if (result) {
           next()
          }
        })
      } catch (err) {
        res.status(400).send(err);
      }
    };


exports.authorization = (req, res, next) => {
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
  


exports.createTokenAndRoleCheck = (req, res, next) => {
    try {
      
        const user: User = users.users.find(user => req.body.email === user.email)
        const token = jwt.sign({ userID: user.userID }, process.env.SECRET_KEY, {expiresIn: '1h'});
        const URL = "/adminpage.html"
        req.token = token
        if (user.role === process.env.ADMIN_ROLE) {
            res.send({URL, token})
        } else {
            next();
        }
    } catch (e) {
        console.error(e)
    }
}
exports.checkPassword = (req, res, next) => {
    try {
        const { password, repassword } = req.body
        if (password === repassword) {
            next()
        } else {
            res.status(400).send("passwords don't match!")
        }
    } catch (e) {
        console.error(e)
    }
}
exports.checkAdminForAllReq = (req, res, next) => {
    try {
        const {userID}  = req.decoded
        const user: User = users.findUser(userID)
        if (user.role === process.env.ADMIN_ROLE) {
            next();
        } else {
            res.status(400).send("you are not authorised to do that!!");
        }
    } catch (e) {
        console.error(e)
    }
}
exports.checkEmailValid = (req, res, next) => {
    try {
        const { email } = req.body
        const emailValidation: User = users.users.find(user => user.email === email)
        if (emailValidation) {
            res.status(400).send("email already taken")
        } else {
            next()
        }
    } catch (e) {
        console.error(e)
    }
}