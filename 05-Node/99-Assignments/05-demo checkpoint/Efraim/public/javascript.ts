async function handleSubmit(ev) {
    ev.preventDefault()
    const name: string = ev.target.children.name.value
    const imageURL: string = ev.target.children.imageURL.value
    const color: string = ev.target.children.color.value
    const result = await axios.post("/user/register", {
        name: name,
        imageURL: imageURL,
        color: color
    })
    alert("User Added & Token Created Succesfully!")
    renderAllUsers()
    ev.target.reset()
}

const form = document.querySelector(".my-form")
form.addEventListener("submit", handleSubmit)

async function renderAllUsers(){
    let html: string=''
    const userHolder: Element = document.querySelector(".holder")
    const allUsers = await axios.get("/user/getAllUsers")
    allUsers.data.users.map(users=>{

        html+= `<div class="holder__user-card" style="background-color: ${users.color}">
                <img class="holder__user-card__image" src="${users.imageURL}">
                <div class="holder__user-card__name">${users.name}</div>
                </div>`
    })
    userHolder.innerHTML = html

}
window.addEventListener("load", renderAllUsers)