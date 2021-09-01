export { };

import { Users } from '../model/users';

export function checkUserExists(req, res, next) {
    try {
        const { email } = req.body;
        //Get all users to see if the user already exist
        const allUsers = new Users();
        allUsers.users;
        const userExist = allUsers.finduser(email);
        if (userExist) {
            res.status(400).send('User already exist');
            return;
        }
  
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
