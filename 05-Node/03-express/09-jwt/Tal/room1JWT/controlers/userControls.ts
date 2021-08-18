const jwt = require('jwt-simple');

import { secret } from '../secrets/secret';

interface Admin{
     username: string; 
     password:string; 
}
const admins:Array<Admin> = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];

export const loginControl = (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);

    const admin:Admin = admins.find(admin=>admin.username === username);
    // const cookieAdmin = {role: 'admin'}
    // const cookiePublic = {role: 'public'}
    const tokenAdmin=jwt.encode(admin,secret);
    // const tokenPublic=jwt.encode(cookiePublic,secret);
    if(admin !== undefined && admin.password === password){
        console.log('is admin');
    } else {
        // res.cookie('user',tokenPublic, { maxAge: 900000, httpOnly: true });
    }
    res.cookie('user',tokenAdmin, { maxAge: 900000, httpOnly: true });
    console.log(tokenAdmin)
   
    res.send({ login: true })

    
}

export const registerControl = (req, res) => {
    res.send({ register: true });
}


// var token = jwt.encode(payload, secret);
 
// var decoded = jwt.decode(token, secret);