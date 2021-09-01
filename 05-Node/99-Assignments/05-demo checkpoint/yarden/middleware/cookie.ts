const jwt = require('jwt');

export const sendCookie = (req, res, next) => {
    if (!req.cookies.myCookie) {
        const cookieBody = 'I have a cookie.';
        res.cookie('myCookie', cookieBody, { maxAge: 900000, httpOnly: true });
    }
    next();
};
