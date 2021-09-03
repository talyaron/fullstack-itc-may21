

const body = document.querySelector('#body')  as HTMLBodyElement
const inputSearch = document.querySelector('#search') as HTMLInputElement

inputSearch.onkeyup = searchByFirstname

async function searchByFirstname(){
    try {
        const searchFirstname = {
            searchFirstname: inputSearch.value
        };

        const getSearchByFirstname = await searchByFirstnameAxios(searchFirstname)
        
        const {data, error} = getSearchByFirstname
        
        console.log(data);
        
        renderUsers(data)
    } catch (error) {
        
    }

}




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