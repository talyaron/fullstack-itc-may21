import { readUsers } from "../models/userModel"

export const userExist = (req,res,next)=> {
    const allUser = readUsers();
    const isFound = allUser.some((element) => element.email === req.body.email);
    if(isFound){
        res.status(400).send('The User Already Exist');
        return;
    }
    next()
}

