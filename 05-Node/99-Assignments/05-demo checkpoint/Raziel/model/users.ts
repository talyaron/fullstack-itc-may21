export { };
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const usersJsonPath = path.resolve(__dirname, "./users.json");

//function to read the user json 


const readJsonUsers = () => {
    try {
        const users = fs.readFileSync(usersJsonPath);
        return JSON.parse(users);
    } catch (error) {
        console.error(error);
    }
};

export  class User{
    name:string;
    email:string;
    password:string;
    img:string;
    id:string;
    color:string;

    constructor(name:string, email:string, password:string ,color:string,img:string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.img=img;
        this.color=color;
        this.id=uuidv4();

    }

}

    export class Users{

        users: Array<User>;
        constructor() {
            this.users = readJsonUsers();
          }
        

          updateUsersJson() {
            try {
                fs.writeFileSync(usersJsonPath, JSON.stringify(this.users));
            } catch (error) {
                console.error(error);
            }
        }
   

        addUser(user){
            try {
                this.users.push(user);
                this.updateUsersJson();
            } catch (error) {
                console.error(error);

            }
        }
    finduser(email){
        try {
            const userInfo = this.users.find(userElement => userElement.email === email);
            if (userInfo) {
                return userInfo;
            } else {
                return console.error("user not found")
            }
        } catch (error) {
            console.error(error);
        }
     
  }
       
    }
