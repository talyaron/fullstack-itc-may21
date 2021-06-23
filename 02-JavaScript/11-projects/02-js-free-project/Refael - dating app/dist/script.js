var letsGoBTN = document.querySelector(".lts-btn");
letsGoBTN.addEventListener("click", function (event) {
    var form = document.querySelector(".form__container");
    var welcome_hi = document.querySelector(".hi");
    var welcome_hi2 = document.querySelector(".hi__welcome");
    var welcome_hi3 = document.querySelector(".hi__welcome2");
    letsGoBTN.classList.remove("lts-btn");
    letsGoBTN.textContent = " ";
    form.style.display = "block";
    welcome_hi.style.display = "none";
    welcome_hi2.style.display = "none";
    welcome_hi3.style.display = "none";
});
var User = /** @class */ (function () {
    function User(name, age, gender, desc, intrested) {
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
        this.users = JSON.parse(localStorage.getItem("creatUsers"));
    }
    UserList.prototype.addUser = function (user) {
        this.users.push(user);
        localStorage.setItem("creatUsers", JSON.stringify(this.users));
    };
    return UserList;
}());
var creatUsers = new UserList();
var submit = document.querySelector(".submitButton");
submit.addEventListener("click", function (ev) {
    ev.preventDefault();
    var name = document.querySelector("#name");
    var age = document.querySelector("#age");
    var gender = document.querySelector('input[name="gender"]:checked');
    var desc = document.querySelector("#desc");
    var intrested = document.querySelector('input[name="intrested"]:checked');
    name = name.value;
    age = age.value;
    gender = gender.value;
    desc = desc.value;
    intrested = intrested.value;
    var creatNewUser = new User(name, age, gender, desc, intrested);
    creatUsers.addUser(creatNewUser);
    // window.location.href = "userList.html";
});
