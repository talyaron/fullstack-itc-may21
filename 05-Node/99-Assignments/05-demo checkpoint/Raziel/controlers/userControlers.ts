export { };

import { User,Users } from '../model/users';

const users= new Users();
export function  getUsers(req,res) {

    try {
        
    res.send({users:users.users})

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}


export function registerUser(req,res){
    try {
     let{name,email,password,img,color}=req.body;
     const user=new User(name,email,password,img,color);
     const users= new Users();
     users.addUser(user);
     res.send({message:"New user was added"});
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}


export function logInUser(req,res){
    try {
   const {email,password}=req.body;
   res.send({ message: "Logged in successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
