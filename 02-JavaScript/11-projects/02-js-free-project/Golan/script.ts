const getUser = 
console.log(getUser)

//method for adding individual user info
class UserInfo {
    name: string;
    favsong: string;
    email: string;
    phone: any;
    checkbox: boolean;
    userId: string = "id" + Math.random().toString(16).slice(2);
    constructor(name: string, favsong: string, email: string, phone: string, checkbox: boolean) {

        this.name = name;
        this.favsong = favsong;
        this.email = email;
        this.phone = phone;
        this.checkbox = checkbox;


    }


    

    
            

}
//class to provide an array of all users for local storage
class AllUsers {
    users: Array<UserInfo> = JSON.parse(localStorage.getItem('AllUsers')); 
    //method to push new user to the array
    addNewUser(user) {
        this.users.push(user)
        console.log(this.users)
        localStorage.setItem("AllUsers", JSON.stringify(this.users));
        //only strings can go into local storage
       
        ;
    }
}



// function for injecting the info from the form to the DOM//
function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    const name = event.target.elements.name.value;
    const favsong = event.target.elements.favsong.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const checkbox = event.target.elements.checkbox.checked;
    //console.log(name, email, phone);
    const user: UserInfo = new UserInfo(
        name,
        favsong,
        email,
        phone,
        checkbox
    );
    console.log(user)
    allOfUsers.addNewUser(user)
    //instance of userInfo to local storage, stringifiy, then save in local storage

    window.location.href = "supporters.html";

    
}
//call AllUsers outside of the scope
const allOfUsers = new AllUsers()


    function showOnDOM() {
        throw new Error("Function not implemented.");
    }
//pull info from local storage















