/* 70 points:
Create an app for sign-in users and displaying all of the users


Create an input form with name, image (URL), and preferred color (with color picker)
The route should respond with the data of all the users.
Render all the users, with their images, in cards that have the user's preferred color

5 points: validation
5 point: put the validation in middleware
5 points: save specific user info in JWT cookie/bearer
5: design patterns: (model, routes, controllers)
5 points: use classes
5 point: use typescript */

//Function to add a new user
const createUser = document.querySelector('#formNewUser');
createUser.addEventListener('submit', newUser);

async function newUser(ev) {
    try {
        ev.preventDefault();
        let { username, picture, color } = ev.target.elements;
        username = username.value;
        picture = picture.value;
        color = color.value;


        if (!username || !picture || !color) throw new Error("Please complete all the fields");
        ev.target.reset();

        const userDetails = { username, picture, color };
        const usersInfo = await axios.post(`/users/newUser/`, userDetails);
        if (usersInfo) {
            swal("Good job!", usersInfo.data.message, "success");
            renderUsers(usersInfo.data.allUsers.users);
        }
    } catch (error) {
        swal("Ohhh no!", error.response.data, "warning");
        console.error(error);
    }
}

async function renderUsers(usersToShow) {
    try {
        const root: HTMLElement = document.querySelector('#root');
        root.classList.remove('error__message')
        let html: any = '';

        if (!usersToShow) {
            const usersInfo = await axios.get(`/users/allUsers`);
            const { users } = usersInfo.data.allUsers;
            usersToShow = users;
        }

        html = usersToShow.map(element => {
            return (
                `<div style="background-color: ${element.color}" class="product__item__wrapper">
                    <img class="product__item__image" onclick="saveUserCookie('${element.uuid}')" src="${element.picture}" alt="Picture of the user">
                    <div><b>${element.username.toUpperCase()} </b></div>
                    <div class="product__item__options" id="editArea">
                    <i class="fas fa-trash-alt button--pointer" onclick="deleteUser('${element.uuid}', '${element.username}')"></i>
                    <i class="fas fa-edit button--pointer" onclick="editUser('${element.uuid}', '${element.username}', '${element.picture}', '${element.color}')"></i>
                    </div>
                </div>`
            )
        }).join('');

        root.innerHTML = html;

        if (!html) {
            root.innerHTML = 'User not found';
            root.classList.add('error__message')
        };

    } catch (error) {
        swal("Ohhh no!", error.response.data, "warning");
        console.error(error);
    }
}

async function saveUserCookie(userId) {
    try {
        await axios.post(`/users/setCookie/${userId}`)
        swal("Good job!", "Cookie set propertly", "success");
    } catch (error) {
        console.error(error);
    }
}

function deleteUser(userId, username) {
    try {
        swal({
            title: "Are you sure?",
            text: `Once deleted, you will not be able to recover ${username}!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteItem(userId);
                } else {
                    swal("Your user is safe!");
                }
            });
    } catch (error) {
        console.error(error);
    }
}

async function deleteItem(id) {
    try {
        const usersInfo = await axios.delete(`/users/deleteUser/${id}`);
        renderUsers(usersInfo.data.allUsers.users);
    } catch (error) {
        console.error(error);
    }
}

//Id to handle the edit
let userId;

function editUser(id, username, picture, color) {
    try {
        if (!modalUpload) throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "block";
        modalUpload.classList.add("showModal");

        const formEdit = document.querySelector("#formEdit");
        if (!formEdit) throw new Error('There is a problem finding form from HTML');
        let html = `
        <h1> Edit user </h1>

        <div class="form__wrapper wrapper__register">
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Enter your username" value="${username}" maxlength="35" required>
            </div>

            <div class="form__wrapper wrapper__register">
                <label for="picture">Image:</label>
                <input type="text" name="picture" placeholder="Enter your image URL" value="${picture}" required>
            </div>

            <div class="form__wrapper wrapper__register">
                <label for="color">Favourite color:</label>
                <input type="color" name="color" placeholder="Enter your favourite color" value=${color}>
            </div>
            
            <input type="submit" value="Update user">`;
        userId = id;
        formEdit.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

//Handle Edit
async function handleEdit(ev) {
    try {
        let { username, picture, color } = ev.target.elements;
        username = username.value;
        picture = picture.value;
        color = color.value;

        if (!username || !picture || !color)
            throw new Error("You need to complete all the fields");

        const userDetails = { username, picture, color };

        if (!modalUpload) throw new Error('There is a problem finding modalEdit from HTML');
        modalUpload.style.display = "none";
        ev.target.reset();
        const usersInfo = await axios.put(`/users/updateUser/${userId}`, userDetails);
        renderUsers(usersInfo.data.allUsers.users);
    } catch (error) {
        swal("Ohhh no!", `${error}`, "warning");
        console.error(error);
    };
};

//Function to do a filter in the search input
async function handleSearch() {
    try {
        const searchUser: any = document.querySelector('#search');
        const regEx: string = searchUser.value;
        const searching: RegExp = new RegExp(regEx, 'i');
        const usersCreated = await axios.get(`/users/allUsers`);
        const usersFiltered = usersCreated.data.allUsers.users.filter(user => searching.test(user.username));
        renderUsers(usersFiltered);
    } catch (error) {
        console.error(error);
    };
};