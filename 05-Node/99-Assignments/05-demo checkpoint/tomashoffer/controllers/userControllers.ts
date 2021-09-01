export {};
import { User, UserMethods, readAllUsers } from "../models/users";
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");


export function registerUser(req: any, res: any) { 
        const id = uuidv4();
        const user = new User(req.body.name, req.body.email, req.body.password, req.body.color, id);
        console.log(user)

        const methodUser = new UserMethods()
        // methodUser.addUser(user);
        res.send({ok:'success register'})
}