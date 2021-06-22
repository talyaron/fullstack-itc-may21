//method for adding individual user info
var UserInfo = /** @class */ (function () {
    function UserInfo(name, favsong, email, phone, checkbox) {
        this.userId = "id" + Math.random().toString(16).slice(2);
        this.name = name;
        this.favsong = favsong;
        this.email = email;
        this.phone = phone;
        this.checkbox = checkbox;
    }
    // this is for page2:
    UserInfo.prototype.showOnDOM = function () {
        // window.location.href = 'supporters.html'
        // localStorage.getItem(JSON.parse(allOfUsers.users) => allOfUsers)
        //on 2nd page parse
        //display on 2nd page:
        //         document.getElementById("data").innerHTML = `Hi ${this.name}, thanks for signing up! Your details are ${this.email} ${this.phone}. We'll be in touch soon!`;
    };
    return UserInfo;
}());
//class to provide an array of all users for local storage
var AllUsers = /** @class */ (function () {
    function AllUsers() {
        this.users = [];
    }
    //method to push new user to the array
    AllUsers.prototype.addNewUser = function (user) {
        this.users.push(user);
        console.log(this.users);
    };
    return AllUsers;
}());
// function for injecting the info from the form to the DOM//
function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    var name = event.target.elements.name.value;
    var favsong = event.target.elements.favsong.value;
    var email = event.target.elements.email.value;
    var phone = event.target.elements.phone.value;
    var checkbox = event.target.elements.checkbox.checked;
    //console.log(name, email, phone);
    var user = new UserInfo(name, favsong, email, phone, checkbox);
    console.log(user);
    allOfUsers.addNewUser(user);
    //instance of userInfo to local storage, stringifiy, then save in local storage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem("AllUsers", JSON.stringify(allOfUsers.users));
    //the other direction is -  //getItemm-setItem, parse-stringifiy   
}
var allOfUsers = new AllUsers();
// [Hey the problems is that you have to initialize the AllUsers class outside of the submit 
//     We initialized it inside the function
//     Const AllUsers = new Allusers
//     You have to do that outside the function
//class for storing all the song info that the user likes - skip it, too complicated
// class Song {
//     infoToArray : Array<UserInfo> = [];
//     name: string = "";
//     constructor(name: string) {
//         this.name = name;
//     }
//method for adding new user info:
// addNewFormSubmit(
//     name: string,
//     email: string,
//     phone: any
// ): string {
//     const newFormSubmit: any = new UserInfo(
//         name,
//         email,
//         phone,
//     );
//     this.infoToArray.push(newFormSubmit);
//     return newFormSubmit;
