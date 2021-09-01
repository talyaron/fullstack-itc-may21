const getAllUsers = async () => {
    try {
        const { data, error } = await axios('users/allUsers');
    } catch (error) {
        console.error(error);
    }
}

const addUser = async (event) => {
    try {
        event.preventDefault()
        const name = event.target.elements[0].value
        const imgUrl = event.target.elements[1].value
        const color = event.target.elements[2].value
        if (!name || !imgUrl || !color) throw new Error('Missing input')
        const { data, error } = await axios.post('/users/addUser', { name, imgUrl, color })
        if (error) throw error;

        const { users } = data;
        event.target.reset();
        renderUsers(users)
        console.log(users);

    } catch (error) {
        console.error(error);
    }
};

type User = {
    id: string; name: string; imgUrl: string; color: string;
};

const renderUsers = (users: Array<User>) => {
    try {
        const usersWrapper = document.querySelector('.usersWrapper')
        let htmlPattern = ''
        users.forEach(u => {
            htmlPattern +=
                `<div class="user" style="background-color: ${u.color}" id="${u.id}">
                <p style="background-color: green; z-index: 10" class="user__name">${u.name}</p>
                <div class="img-wrapper">
                    <img src="${u.imgUrl}" alt="user's image">
                </div>
                </div>
            `
        });
        usersWrapper.innerHTML = htmlPattern
    } catch (error) {
    }
}