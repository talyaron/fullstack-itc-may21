function getUser(req, res, next){
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