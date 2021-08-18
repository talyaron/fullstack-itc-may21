const jwt = require('jwt-simple');

const{secret} = require('../secrets/secrets');

interface Admin{
     username: string; 
     password:string; 
}
const admins:Array<Admin> = [{ username: 'tal', password: '123' }, { username: 'dana', password: '1234' }];

export const loginControl = (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);

    const admin:Admin = admins.find(admin=>admin.username === username);

    const role = {role:null}
    if(admin !== undefined && admin.password === password){
        console.log('is admin');
        role.role = 'admin';
       
    } else {

        role.role = 'public';
        
       
    }
   
    var roleJWT = jwt.encode(role, secret);

    res.cookie('user',roleJWT, { maxAge: 900000, httpOnly: true });

    res.send({ login: true })
}

export const registerControl = (req, res) => {
    res.send({ register: true });
}