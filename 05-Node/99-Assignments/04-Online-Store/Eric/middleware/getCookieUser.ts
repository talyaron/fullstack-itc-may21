export function isAdmin(req,res, next){
    const {cookiUser} = req.cookies;
    console.log(cookiUser);
    res.send(cookiUser);
    next()

  }