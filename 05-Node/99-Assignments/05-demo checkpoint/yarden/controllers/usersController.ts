import { User, UsersList } from "../models/usersModel";

const users = new UsersList()


export function get_users(req, res) {
    res.send({ users: users.usersArray })
}

export function add_user(req, res) {
    try {
        const { name, imgUrl, color } = req.body
        if (!name || !imgUrl || !color) throw new Error('Missing input')
        const newUser = new User(name, imgUrl, color)
        users.addUser(newUser)
        console.log(newUser);

        res.send({ users: users.usersArray })
    } catch (error) {
        console.error(error)
    }
}