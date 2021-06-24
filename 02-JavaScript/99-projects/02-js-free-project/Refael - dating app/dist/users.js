var users = JSON.parse(localStorage.getItem("creatUsers"));
console.log(users);
var usersHTML = users.map(function (user) {
    console.log(users);
    var userName = user.name;
    var userAge = user.age;
    var userGender = user.gender;
    var userDesc = user.desc;
    var userIntrested = user.intrested;
    var container = document.querySelector(".container");
    container.innerHTML += "<div class=\"user\"><a href=\"user.html?userId=" + userName + "\">Profile: " + userName + " is" + userAge + " years old " + userGender + " who likes to " + userDesc + " and intresten in " + userIntrested + "</a></div>";
});
