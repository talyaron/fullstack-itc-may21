async function renderUsers() {
    try {
        const getUsersDetails = await axios.get('/users/all');
        const { users } = getUsersDetails.data;

        const usersElement: HTMLElement = document.querySelector('.users');
        const html: string = users.map(user => {
            return `
        <div class="users__item user" id="${user.userUuid}" style="background-color: ${user.favColor}">
            <img src="${user.imageUrl}"
            <h2 class="user__item user__item--name">${user.name}</h2>
        </div>`}).join('');
        usersElement.innerHTML = html;

    } catch (error) {
        console.error(error.message);
    }
}

renderUsers();