var users = JSON.parse(localStorage.getItem("creatUsers"));
var usersHTML = users.map(function (user) {
    var userName = user.name;
    var userAge = user.age;
    var userGender = user.gender;
    var userDesc = user.desc;
    var userIntrested = user.intrested;
    var userId = user.id;
    var container = document.querySelector(".container");
    container.innerHTML += "<div class=\"user\"><h1><a href=\"user.html?userId=" + userId + "\">Profile: " + userName + " is a " + userAge + " years old " + userGender + " who likes to " + userDesc + " and intresten in " + userIntrested + "</a></h1></div>";
});
