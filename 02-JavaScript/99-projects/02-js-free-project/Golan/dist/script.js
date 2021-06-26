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
    return UserInfo;
}());
//class to provide an array of all users for local storage
var AllUsers = /** @class */ (function () {
    function AllUsers() {
        this.users = JSON.parse(localStorage.getItem('AllUsers')) ? JSON.parse(localStorage.getItem('AllUsers')) : [];
    }
    //method to push new user to the array
    AllUsers.prototype.addNewUser = function (user) {
        this.users.push(user);
        console.log(this.users); //YS: Please dont leave console logs in your code
        localStorage.setItem("AllUsers", JSON.stringify(this.users));
        //only strings can go into local storage
        ;
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
    var checkbox = event.target.elements.checkbox.checked; //YS: What is the purpose of this checkbox? 
    var user = new UserInfo(name, favsong, email, phone, checkbox);
    console.log(user, 'should display user'); //YS: Please dont leave console logs. 
    allOfUsers.addNewUser(user);
    window.location.href = "supporters.html";
}
//call AllUsers outside of the scope
var allOfUsers = new AllUsers();
