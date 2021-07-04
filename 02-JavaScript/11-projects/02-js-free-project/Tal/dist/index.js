var users = [];
var handleSubmit = function (ev) {
    ev.preventDefault();
    var id = "Id_" + Math.random();
    var name = ev.target.elements.name.value;
    users.push({ name: name, id: id });
    renderUsers(users);
    window.localStorage.setItem('users', JSON.stringify(users));
    ev.target.reset();
    console.log(users);
};
function renderUsers(users) {
    var usersHTML = users.map(function (user) {
        return "<p onclick=\"handleRedirect('" + user.id + "')\">" + user.name + "</p>";
    }).join('');
    document.querySelector('#usersRoot').innerHTML = usersHTML;
}
function handleRedirect(userId) {
    console.log(userId);
    window.location.href = "user.html?userId=" + userId;
}
