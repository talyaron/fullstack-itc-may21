const { readAllUsers } = require('../models/users');

export function passCorrect(req, res, next) {
    const { email } = req.body;
    const { password } = req.body;
    const allUsers = readAllUsers();
    const user = allUsers.find((user) => user.email === email);  
    if(user.password === password){
        next(user);
    }else{
        console.log('tenes un error en la password')
    }
}