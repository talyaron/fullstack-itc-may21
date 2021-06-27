//render on 3rd page
function showOnDOM() {
    const allUsers = JSON.parse(localStorage.getItem('AllUsers'));
    const data = document.querySelector(".data");
    console.log(allUsers);
    allUsers.forEach(user => {
        data.innerHTML += `<div class="allusers">${user.name} entered the following data: ${user.email}, ${user.phone}, ${user.favsong}. Keep rockin'!</div>`;
        //YS: Use insertAdjecentHtml instead of innerHTML
    });

}

showOnDOM();