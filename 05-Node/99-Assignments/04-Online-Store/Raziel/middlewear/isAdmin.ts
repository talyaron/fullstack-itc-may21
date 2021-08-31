export { };

import { Users } from "../models/users";

export function isAdmin(req,res, next){

try {
    const allUsers=new Users();
    const userEmail=allUsers.findUser(req.email);

    if(userEmail.role ==="admin"){
        next();
    }
    else{
        res.status(401).send("Your not valid on this page");
        return;
    }
} catch (error) {
    res.status(500).send(error.message);

}
}