export { };


import { Users } from '../models/users'

export function doRegUserExists(req, res, next) {

    try {
        const { username,email,role } = req.body;
        const allUsers = new Users();
        allUsers.users;
        const userExists = allUsers.findUser(email);
        if (userExists) {
            res.status(400).send('User already exist');
            return;
        }
        req.username = username;
        req.role = role;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}



export function doLogInUserExists(req, res, next) {

    try {
        const { email} = req.body;
        const allUsers = new Users();
        const userExists = allUsers.findUser(email);
        if (userExists) {
            res.status(400).send('User doesnt exist');
            return;
        }
        req.username = userExists.username;
        req.role = userExists.role;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
