import {User, Users} from '../models/users'
// const jwt = require('jwt-simple');
// import { secret } from './secret/secret';

const users = new Users()


export function addUser(req, res){

    const {firstname, image, color} = req.body
    const user = new User(firstname, image, color)
    users.addUser(user)
    res.send({users:users})
}

export function getUsers(req, res){
    res.send({users:users})
}

export function searchByFirstname(req, res){
    
    const {searchFirstname} = req.body
    const findUsers = users.searchStudentsByFirstname(searchFirstname)
    res.send({users:findUsers})    
}
