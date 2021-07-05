//grab info from contacts page
function showOnDOM() {
    const render = JSON.parse(localStorage.getItem("contactos"));
    const lastUserIndex = allUsers.length - 1;
    const lastUser = render[lastUserIndex];
    const data = document.querySelector(".data");
    console.log(render);
    data.innerHTML = `<div>Hi ${element.name}, thanks for signing up! Your details are ${lastUser.email}, ${lastUser.phone}. We'll be in touch soon!</div>`;

}

showOnDOM();
//grab info from chat-bar and display as a message