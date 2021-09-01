
export{};
const { v4: uuidv4 } = require("uuid");

const fs=require("fs");
const path=require("path");
const userJsonPath = path.resolve(__dirname,"./users.json");

 const readJsonUsers=() =>{
   try {
     const users=fs.readFileSync(userJsonPath);
     return JSON.parse(users);
   } catch (error) {
     console.error(error)
   }
 }


 enum Role{
   user='user',
   admin='admin'
 }


 export class User{
  uuid: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  purchasedCarts: Array<string>;
 

  constructor(username: string, email: string, password: string, role: Role) {
  
      this.uuid = uuidv4();
      this.username = username;
      this.email = email;
      this.password = password;
      this.purchasedCarts = [];
      this.role = role;
      
  }


 }



 export class Users{
   users:Array<User>;

   constructor(){
     this.users=readJsonUsers();
   }

   updateUserJson(){
     try {
      fs.writeFileSync(userJsonPath, JSON.stringify(this.users));

     } catch (error) {
       console.error(error)
     }
   }


   createNewUser(user){

    try {
      this.users.push(user);
      
      this.updateUserJson();
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
   }


    findUser(email){
      try {
        const userInfo=this.users.find(userEmail=>userEmail.email=== email);
        if(userInfo){
          return userInfo;
        }
        else{
          return undefined;
        }
      } catch (error) {
        console.error(error);

      }
    }

    findUserById(id) {
      try {
          const userInfo = this.users.find(userElement => userElement.uuid === id);
          if (userInfo) {
              return userInfo;
          } else {
              return undefined
          }
      } catch (error) {
          console.error(error);
      }
  }
    addPurchCart(userInfo,cartID){
      try {
        userInfo.purchasedCarts.push(cartID)
      } catch (error) {
        console.error(error)
      }
    }
 }