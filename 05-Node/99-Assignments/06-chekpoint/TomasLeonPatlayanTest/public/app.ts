const body = document.querySelector('#body')  as HTMLBodyElement
const form = document.getElementById('form')
const postBook = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const bookName = event.target.elements.bookName.value;

    const dataBook = { name, bookName };
    const postUser = await axios.post('/user/postUser', dataBook)
    console.log(postUser);


}
form.addEventListener('submit', postBook)

 
const renderUsers =  async (data)=>{
const root = document.getElementById('root');
const getUser = await axios.get('/user/getUsers');
 const {users} = getUser.data;
 data = users;

 let html = data.map((element)=>{
     return `
     <div class="books">
     <p>${element.name}</p>
     <p>${element.bookName}</p>
     </div>
     
     
     `
 }).join("");
 root.innerHTML = html

}

 





const inputSearch = document.querySelector('#search') as HTMLInputElement

async function searchByFirstnameAxios(searchFirstname) {
    const response = await axios.put('/user/searchBook', searchFirstname)
    return response
}

inputSearch.onkeyup = searchByFirstname

async function searchByFirstname() {
    try {
        const root = document.getElementById('root');
        const searchFirstname = {
            name: inputSearch.value,
            
        };
        console.log(searchFirstname)

        const getSearchByFirstname = await searchByFirstnameAxios(searchFirstname)
        console.log(getSearchByFirstname)

        const { data, error } = getSearchByFirstname

        let html = data.map((element)=>{
            return `
            <div class="books">
            <p>${element.name}</p>
            <p>${element.bookName}</p>
            </div>
            
            
            `
        }).join("");
        root.innerHTML = html
      
    

    } catch (error) {

    }

}
 const getUser = async () => {
     const getUsers = await axios.get("/user/getUsers")
     const dataUsers = getUsers.data.users;
     renderUsers(dataUsers)
 }

 getUser()