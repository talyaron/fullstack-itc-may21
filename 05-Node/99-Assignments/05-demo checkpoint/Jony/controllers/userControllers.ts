export { };

import {Users } from '../models/user'

const users = new Users()

export function addUser(req, res) {
    try {
        users.addUser(req.user)
        res.send({ message: "User Added", user: users})
    } catch (e) {
        res.status(500).send({ error: `${e}` })

    }
}

export function getUsers(req, res) {
    try {
        res.send({ user: users })
    } catch (e) {
        res.status(500).send({ error: `${e}` })

    }
}

export function deleteUser(req, res){
    try{
        const {id} = req.params
        users.deleteUser(id)
        res.send({ user: users })
    }catch(e){
        res.status(500).send({ error: `${e}` })
    }
}