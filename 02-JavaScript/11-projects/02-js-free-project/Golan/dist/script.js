var getUser = console.log(getUser);
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
        this.users = JSON.parse(localStorage.getItem('AllUsers'));
    }
    //method to push new user to the array
    AllUsers.prototype.addNewUser = function (user) {
        this.users.push(user);
        console.log(this.users);
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
    var checkbox = event.target.elements.checkbox.checked;
    //console.log(name, email, phone);
    var user = new UserInfo(name, favsong, email, phone, checkbox);
    console.log(user);
    allOfUsers.addNewUser(user);
    //instance of userInfo to local storage, stringifiy, then save in local storage
    window.location.href = "supporters.html";
}
//call AllUsers outside of the scope
var allOfUsers = new AllUsers();
function showOnDOM() {
    throw new Error("Function not implemented.");
}
//pull info from local storage
