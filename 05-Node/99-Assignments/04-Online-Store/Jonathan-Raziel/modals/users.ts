export {};

class User{
    name:string;
    email:string;
    password:string;
    surveys:Array<string>;
    
   constructor(name,email,password,surveys){
       this.name=name;
       this.email=email;
       this.password=password;
       this.surveys=surveys;
   }

}

class UserList{
     UsersArray:Array<User>=[];
      
     add(users:User){
         try {
            this.UsersArray.push(users); 
         } catch (error) {
            console.log(error); 
         }
     }
  
}

