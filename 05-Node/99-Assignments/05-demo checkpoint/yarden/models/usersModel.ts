export class User {
    id: string
    name: string
    imgUrl: string
    color: string
    constructor(name: string, imgUrl: string, color: string) {
        this.id = Math.random().toString(16)
        this.name = name
        this.imgUrl = imgUrl
        this.color = color
    }
}

export class UsersList {
    usersArray: Array<User>
    constructor() {
        this.usersArray = []
    }
    addUser(newUser: User) {
        this.usersArray.push(newUser)
    }
}