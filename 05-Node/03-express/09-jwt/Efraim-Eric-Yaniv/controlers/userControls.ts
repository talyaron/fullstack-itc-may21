const jwt = require('jwt-simple');
import { secret } from '../secret/secret';

interface Admin{
     username: string; 
     password:string; 
}
const admins:Array<Admin> = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];

export const loginControl = (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);

    const admin:Admin = admins.find(admin=>admin.username === username);
    let payload;

    if(admin !== undefined && admin.password === password){
        console.log('is admin');
        payload = {role:'admin'};

        const token = jwt.encode(payload, secret);
        
        res.cookie('user',token, { maxAge: 900000, httpOnly: true });
    } else {
        payload = {role:'public'};

        const token = jwt.encode(payload, secret);

        res.cookie('user',token, { maxAge: 900000, httpOnly: true });
    }
   
    res.send({ login: true })
}

export const registerControl = (req, res) => {
    res.send({ register: true });
}