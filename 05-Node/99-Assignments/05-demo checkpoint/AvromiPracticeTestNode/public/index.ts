const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);
window.onload = () => {
    getAllUsers()
}
function handleSubmit(ev) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const imgSrc = ev.target.elements.imgSrc.value;
    const prefColor = ev.target.elements.prefColor.value;
    console.log(name, imgSrc, prefColor)
    addUser(name, imgSrc, prefColor)

    ev.target.reset();
}

async function getAllUsers() {
    try {
        const res = await axios('/getUsers');
        const allUsers = res.data;
        render(allUsers)
    } catch (error) {
        console.log(error.message);
    }
}

async function addUser(name, imgSrc, prefColor) {
    try {
        const res = await axios.post("/addUser", { name, imgSrc, prefColor });
        const allUsers = res.data
        console.log(allUsers);
        render(allUsers)
    } catch (error) {
        console.log(error.message);
    }
}

function render(data) {
    try {

        const root = document.querySelector(".root");
        let html = "";
        data.forEach((user) => {
            html += `<div class="card">
<img src="${user.imgSrc}" alt="${user.name}" style="width:100%">
<h1>${user.name}</h1>

<div class="color" style="background-color:${user.prefColor};"></div>

</div>`
        })
        root.innerHTML = html;

    } catch (error) {
        console.log(error.message);
    }
}


