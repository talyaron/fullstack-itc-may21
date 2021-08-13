export {};

export function readUserCookie(req, res, next) {

    const { userDetails } = req.cookies;
    if (userDetails) {
        const cookie = JSON.parse(userDetails);
        const { username, email } = cookie;
        req.username = username;
        req.email = email;

        next();
    }

    const { username, email } = req.body;
    const cookieToWrite: string = JSON.stringify({ username, email });
    res.cookie('userDetails', cookieToWrite, { maxAge: 300000000, httpOnly: true });

    req.username = username;
    req.email = email;

    next();
}