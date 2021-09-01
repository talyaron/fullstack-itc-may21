const bcrypt = require('bcrypt');
export const encryptPassword = (req, res, next) => {
  const saltRounds = 10;
  const {passowrd} = req.body;
  console.log(passowrd);
  
    bcrypt.hash(passowrd, saltRounds, (err, hash) => {
    if(err){
        res.status(500).send(err);
        console.log(err);
        
        return
    }

    req.body.password = hash;
    next()
  });
};
