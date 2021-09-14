async function renderUsers(results: Array<any>) {
    try {
        const getUsersDetails = await axios.get('/user/all');
        let { users } = getUsersDetails.data;
        localStorage.setItem('users', JSON.stringify(users));

        if (results) users = results;

        const usersElement: HTMLElement = document.querySelector('.users');
        const html: string = users.map(user => {
            return `
        <div class="users__item user" id="${user.userUuid}" style="background-color: ${user.favColor}">
            <img class="user__item user__item--img" src="${user.imageUrl}" />
            <h2 class="user__item user__item--name">${user.username}</h2>
        </div>`}).join('');
        usersElement.innerHTML = html;

    } catch (error) {
        console.error(error.message);
    }
}

renderUsers(undefined); // all users

const findUsersBySearchTerm = (serachTerm: string) => {
    const userRegEx = new RegExp(serachTerm,'gmi');
    const users: Array<any> = JSON.parse(localStorage.getItem('users'));

    const searchResults: Array<any> = users.filter(user => userRegEx.test(user.username));
    return searchResults;
}

const usersSearchForm: HTMLFormElement = document.querySelector('#search-users-form');
usersSearchForm.addEventListener('submit', handleSubmit);
console.log(typeof usersSearchForm);
function handleSubmit(ev: any) {
    try {  
        ev.preventDefault();

        const searchTerm: string = ev.target.elements.searchByName.value;
        const results = findUsersBySearchTerm(searchTerm);
        renderUsers(results);

        ev.target.reset();
    } catch (er) {
        console.error(er)
    }
}

const searchByNameInput: HTMLElement = document.querySelector('#search-by-name');
searchByNameInput.addEventListener('keyup', handleKeyUp);

function handleKeyUp(ev: any) {
    try {  
        ev.preventDefault();

        const searchTerm: string = ev.target.value;
        const results = findUsersBySearchTerm(searchTerm);
        renderUsers(results);

    } catch (er) {
        console.error(er)
    }
}