export { };
import { secret } from './secret';
const jwt = require('jwt-simple');
import { User, Users } from '../models/users'


export function userCookieWrite(req, res, next) {

    try {

        const {email,role} = req.body;
        const allUsers = new Users();
        let user=allUsers.findUser(email)

        if(!user){
            const {username,role}=req.body;
            const hashPassword=req.hashPassword;
            user= new User(username,email,hashPassword,role);

        }

         const cookieToWrite=JSON.stringify({id:user.uuid});
         const token=jwt.encode(cookieToWrite,secret);
         res.cookie("userInfo", token, { maxAge: 2000000, httpOnly: true });
         req.email = email;
         req.username = user.username;
         req.role = user.role;
         req.user = user;
         next();
 
 
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }

}

//to read the cookie

export function userCookieRead(req, res, next) {
    try {
        const { userInfo } = req.cookies;

        if (userInfo) {
            const decoded = jwt.decode(userInfo, secret);
            const cookie = JSON.parse(decoded);
            const { id } = cookie;
            const allUsers = new Users();
            const user = allUsers.findUserById(id);

            req.username = user.username;
            req.email = user.email;
            req.role = user.role;
            next();
        } else {
            req.cookieExists = false;
            res.status(401).send({ cookieExist: req.cookieExists, message: 'The session has expired. Please log in again.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}