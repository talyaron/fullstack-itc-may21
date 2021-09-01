export { };
import { User, UserMethods, readAllUsers } from "../models/users";
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");


export function registerUser(req: any, res: any) {
        try {
                console.log('register')
                const id = uuidv4();
                const user = new User(req.body.name, req.body.email, req.body.password, req.body.color, id);

                console.log('add user2')
                const methodUser = new UserMethods()
                console.log('add user')
                methodUser.addUser(user);
                res.send({ ok: 'success register' })
        } catch (err) {
                res.send({ error: err })
        }
}