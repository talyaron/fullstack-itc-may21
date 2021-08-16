export {};

import { Users } from "../models/users";

export function isAdmin(req, res, next) {
    try {
        let isUserAdmin: boolean = false;
        const allUsers = new Users(); //YS: Here you are creating a new instance of Users (different from the one you are using)
        const userIndex = allUsers.users.findIndex(user => user.email === req.email);

        if ((userIndex !== -1)) { // user exists
            const userPass = allUsers.users[userIndex].password;
            if (userPass) { // have password => admin
                isUserAdmin = true;
            }
        }
        if (isUserAdmin) next();
        else res.status(401).send({error:'You are not authorized to open this page'});

    } catch (error) {
        res.status(500).send(error.message);
    }
}