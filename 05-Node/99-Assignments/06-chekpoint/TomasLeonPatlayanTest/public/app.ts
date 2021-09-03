const form = document.getElementById('form')
const postBook = async (event)=> {
event.preventDefault();
const name = event.target.elements.name.value;
const bookName = event.target.elements.bookName.value;

const dataBook ={name,bookName};
const postUser = await axios.post('/user/postUser', dataBook)
console.log(postUser);


}
form.addEventListener('submit', postBook)

const inputSearch = document.querySelector('#search') as HTMLInputElement

async function searchByFirstnameAxios(searchFirstname) {
    const response = await axios.put('/user/searchBook', searchFirstname)
    return response
}

inputSearch.onkeyup = searchByFirstname

async function searchByFirstname(){
    try {
        const searchFirstname = {
            searchFirstname: inputSearch.value
        };

        const getSearchByFirstname = await searchByFirstnameAxios(searchFirstname)
        
        const {data, error} = getSearchByFirstname
        
        console.log(data);
        

    } catch (error) {
        
    }

}
