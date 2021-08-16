function getUser(req, res, next){  //YS: Very nice! 
    const userCookie = req.cookies.cookie;
    console.log(userCookie);
    console.log('middleware')
    if(userCookie){
        req.user = userCookie;
        console.log(req.user)
    }
    next();
}

exports.getUser = getUser;