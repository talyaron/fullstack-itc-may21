

const form = document.querySelector('#form')  as HTMLFormElement
const body = document.querySelector('#body')  as HTMLBodyElement


form.addEventListener('submit',addUsers )

body.onload = getUsers
async function getUsers(){
    try {
        const getUser = await getUsersAxios()
        const {data, error} = getUser
        console.log(data);
        
        renderUsers(data.users)

    } catch (error) {
        console.error(error)
        
    }
}


async function addUsers (ev){
    ev.preventDefault()
    try {
        let{firstname, image, color} = ev.target.elements;
        firstname = firstname.value;
        image = image.value;
        color = color.value;
        
        const newUser = {firstname:firstname, image:image, color:color}
        const user = await addUserAxios(newUser)
        

        renderUsers(user.users)

        ev.target.reset()
        

    } catch (error) {
        console.log(error)
    }
}


function renderUsers(users){
    try {
        let html:string = ''
        const root = document.querySelector('#root')
        users.users.forEach(user => {
            const {firstname, image, color} = user
            console.log(firstname, image, color);
            
            html += `<div class="card"  style="background:${color}">
                        <img src="${image}" style="width:50%">
                            <div class="container">
                                <h4><b>Username: ${firstname}</b></h4>
                            </div>
                    </div>`
          
            
        });
        root.innerHTML = html
        
    } catch (e) {
        console.error(e);
        
    }

}

