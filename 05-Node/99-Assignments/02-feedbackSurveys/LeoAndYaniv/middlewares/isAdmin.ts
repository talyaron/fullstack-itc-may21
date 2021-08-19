export {};

import { Users } from "../models/users";

export function isAdmin(req, res, next) {
    try {
        req.isAuthorized = false;
        const allUsers = new Users();
        const userIndex = allUsers.users.findIndex(user => user.email === req.email);

        if ((userIndex !== -1)) { // user exists
            const userPass = allUsers.users[userIndex].password;
            if (userPass) { // have password => admin
                req.isAuthorized = true;
            }
        }
        if (req.isAuthorized) next();
        else res.status(401).send({isAuthorized: req.isAuthorized, message:'You are not authorized to open this page.'});

    } catch (error) {
        res.status(500).send(error.message);
    }
}