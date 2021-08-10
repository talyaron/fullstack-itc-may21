export { };

import { users } from '../models/users';

export function allUsers (req, res) {
    res.send(users);
}

/* export function firstBeach (req, res) {
    res.send(beaches[0]);
}; */