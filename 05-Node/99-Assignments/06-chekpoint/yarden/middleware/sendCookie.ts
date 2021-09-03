export const sendCookie = (req, res, next) => {
    if (!req.cookies.myCookie) {
        const cookieBody = 'Was asked to create a cookie! Here it is';
        res.cookie('myCookie', cookieBody, { maxAge: 900000, httpOnly: true });
    }
    next();
};
