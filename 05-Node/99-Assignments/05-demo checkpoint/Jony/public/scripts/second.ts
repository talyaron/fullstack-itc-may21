const body = document.querySelector('#body') as HTMLBodyElement

body.onload = getAllUsers

interface User{
    name: string,
    image: string,
    color: string,
}

async function getAllUsers() {
    try {

        const getUsers = await getAllUsersAxios()
        const { data } = getUsers
        renderUsers(data.user)
    } catch (e) {
        alert(e)
    }
}

function renderUsers(user:Array<User>) {
    try {
        let html: string = ''
        const root = document.querySelector('#root') as HTMLDivElement;
        if(!root) throw new Error("No board to show")
        user.users.forEach(user => {
            const { id, name, image, color } = user
            html += `
                    <div style="background:${color}" class="boxes" onclick="deletePokemon('${id}')">
                    <div class="image">
                        <img src="${image}" alt="name" width="100" height="100">
                    </div>
                    <div class="divname">
                        <span class="name">${name}</span>
                    </div>
                    </div>`
        });

        root.innerHTML = html;
    } catch (e) {
        alert(e)
    }
}

async function deletePokemon(id: string){
    try{
        const deletePokemon = await deletePokemoAxios(id);
        const { data } = deletePokemon
        renderUsers(data.user)
    }catch(e){
        alert(e)
    }
}