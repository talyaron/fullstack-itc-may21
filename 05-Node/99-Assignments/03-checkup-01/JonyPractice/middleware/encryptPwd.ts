const bcrypt = require('bcrypt');

//here you encrypt your password in register

export const encryptPwd = (req, res, next) => {
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
