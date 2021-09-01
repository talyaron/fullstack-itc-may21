export function isAdmin(req,res, next){ //YS: This middleware is called isAdmin but I dont see you checking if its admin here
    const {cookiUser} = req.cookies;
    console.log(cookiUser);
    res.send(cookiUser);
    next()

  }