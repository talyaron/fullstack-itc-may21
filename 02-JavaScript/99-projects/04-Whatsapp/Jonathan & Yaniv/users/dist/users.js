var User = /** @class */ (function () {
    function User(userImg, userName, userPhone) {
        this.userId = "user" + Math.random().toString(16).slice(2);
    }
    return User;
}());
var usersContainer = document.querySelector('.users');
usersContainer.addEventListener('click', function (ev) { return userPicker(ev); });
var userPicker = function (ev) {
    if (ev.target.className === 'users')
        return;
    var userContainer;
    if (ev.target.id.indexOf('user_') === -1)
        userContainer = ev.target;
    else
        userContainer = ev.target.parentElement;
    var userImg = userContainer.querySelector("#user_img").getAttribute('src');
    var userNameContainer = userContainer.querySelector("#user_name");
    var userName = userNameContainer.innerText;
    var userPhoneContainer = userContainer.querySelector("#user_phone");
    var userPhone = userPhoneContainer.innerText;
    console.log(userImg, userName, userPhone);
    var pickedUser = new User(userImg, userName, userPhone);
    userContainer.setAttribute('id', pickedUser.userId);
    // localStorage.setItem('currentUser',)
};
