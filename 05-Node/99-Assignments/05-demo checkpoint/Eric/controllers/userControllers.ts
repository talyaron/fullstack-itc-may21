import {User, Users} from '../models/users'

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
