var User = /** @class */ (function () {
    function User(name, age, gender, desc, intrested) {
        this.id = "id" + Math.random();
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.desc = desc;
        this.intrested = intrested;
    }
    return User;
}());
var UserList = /** @class */ (function () {
    function UserList() {
        this.users = [];
    }
    UserList.prototype.addUser = function (user) {
        this.users.push(user);
        localStorage.setItem("creatUsers", JSON.stringify(this.users));
    };
    UserList.prototype.usersFromStorage = function () {
        var usersStorage = JSON.parse(localStorage.getItem("creatUsers"));
        if (usersStorage) {
            this.users = usersStorage;
        }
    };
    UserList.prototype.renderUsers = function () {
        // loop over array and show on dom
    };
    return UserList;
}());
var users = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users);
console.log(users);
var usersHTML = users.map(function (user) {
    var userName = user.name;
    var userAge = user.age;
    var userGender = user.gender; /* All of these variables are not necessary. You couldve just wrote on your HTML ${user.name}, ${user.age}, etc */
    var userDesc = user.desc;
    var userIntrested = user.intrested;
    var userId = user.id;
    var container = document.querySelector(".container");
    container.innerHTML += "<div class=\"user\"><h1><a href=\"user.html?userId=" + userId + "\">Profile:\n   " + userName + " is a " + userAge + " years old " + userGender + " who describes himself as " + userDesc + " and intresten in\n   " + userIntrested + "</a></h1><button class=\"removeFromDOM\">Remove ID:" + userId + "</button></div>";
    var removeBTN = document.querySelectorAll(".removeFromDOM");
    var _loop_1 = function (button) {
        button.addEventListener("click", function (event) {
            if ((button.innerHTML === "Remove ID:", "" + userId)) {
                button.parentElement.remove();
            }
        });
    };
    for (var _i = 0, removeBTN_1 = removeBTN; _i < removeBTN_1.length; _i++) {
        var button = removeBTN_1[_i];
        _loop_1(button);
    }
});
// button.setAttribute("alt", userId)
