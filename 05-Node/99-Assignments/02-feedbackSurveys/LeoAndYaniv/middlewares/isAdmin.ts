export {};

import { Users } from "../models/users";

export function isAdmin(req, res, next) {
    try {
        let isUserAdmin: boolean = false;
        const allUsers = new Users();
        const userIndex = allUsers.users.findIndex(user => user.email === req.email);

        if ((userIndex !== -1)) { // user exists
            const userPass = allUsers.users[userIndex].password;
            if (userPass) { // have password => admin
                isUserAdmin = true;
                next();
            }
        } else {
            res.status(401).send({error:'You are not authorized to open this page'});
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}