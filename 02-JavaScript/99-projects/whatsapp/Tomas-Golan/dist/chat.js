//grab info from contacts page
function showOnDOM() {
    var render = JSON.parse(localStorage.getItem("contactos"));
    var lastUserIndex = allUsers.length - 1;
    var lastUser = render[lastUserIndex];
    var data = document.querySelector(".data");
    console.log(render);
    data.innerHTML = "<div>Hi " + element.name + ", thanks for signing up! Your details are " + lastUser.email + ", " + lastUser.phone + ". We'll be in touch soon!</div>";
}
showOnDOM();
//grab info from chat-bar and display as a message
