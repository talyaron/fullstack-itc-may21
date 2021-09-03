
let identProduct
let searchName
const renderUser = async (data) => {
  const root = document.getElementById("root");
  const getUser = await axios.get("/user/getAllUsers");
  const { users } = getUser.data.allUsers;
  data = users;

  let html = data
    .map((element) => {
      return `
        <div  style="background:${element.color};" class="user">
        

        <div class="user__image">
         <img src="${element.image}" alt="imageUser">
        </div>


        <div class="user__name">
        <p>${element.name}</p>
        </div>
    
        <button onclick="delteUsers('${element.id}')">Delete</button>
        <button
        type="button"
        class="btn btn-primary itemInfo"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
        onclick='bringInfoUsers("${element.id}")'
        checked
      >
        Edit
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form id="formEdit" onsubmit="handleEditUser(event)">
                <div class="container__input-name">
                  <legend>Pokemon Name</legend>
                  <input type="text" name="name" class="name" />
                </div>
                <input type="color" name="color" class="color" />

                <input type="text" name="image" class="image" />
      
                <div class="container__button">
                  <button class="btn btn-warning" type="submit">Send</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      

        
        </div>
        `;
    })
    .join("");

  root.innerHTML = html;
};


const getUser = async () => {
    const getUser = await axios.get("/user/getAllUsers");
    const dataUser = getUser.data.allUsers.users;
    renderUser(dataUser);
    
}
 
const delteUsers=async (id)=> {
const deleteUser = await axios.post(`/user/deleteUser/${id}`);
renderUser(deleteUser) 

} 

const bringInfoUsers = async (id) => {
  const  bringId = await axios.get(`/user/bringInfoUser/${id}`)

  const name = document.querySelector('.name') as HTMLInputElement;
  const color = document.querySelector('.color') as HTMLInputElement;
  const image = document.querySelector('.image') as HTMLInputElement;
 
  name.value = bringId.data.name;
  color.value = bringId.data.color;
  image.value = bringId.data.image;
  identProduct = id;


  
}
 const handleEditUser = async (event) => {
    event.preventDefault()
 const name = event.target.elements.name.value;
 const color =event.target.elements.color.value;
 const image = event.target.elements.image.value;
 const newData = {name:name,color:color,image:image};
   const  editUser = await axios.post(`/user/updateUser/${identProduct}`,newData)

   const updateData = editUser.data.allUsers;
   renderUser(updateData)
 
  }

  async function searchByFirstnameAxios(searchFirstname) {
    const response = await axios.get('/user/searchByFirstname', searchFirstname)
    return response
}



const inputSearch = document.querySelector('#search') as HTMLInputElement



inputSearch.onkeyup = searchByFirstname
console.log(inputSearch.value);

async function searchByFirstname(){
    try {
   
        const searchFirstname = {
            searchFirstname: inputSearch.value
        };

        const getSearchByFirstname = await searchByFirstnameAxios(searchFirstname)
        
        console.log(getSearchByFirstname.data);
        
    } catch (error) {
        
    }


}

searchByFirstname()

// const searchBars = async (event) => {
//  const  searchName = event.target.value;
//  const pep = {name:searchName}
 
//   const searchBar = await axios.put("/user/searchName",pep );
//   console.log(searchBar);
  
// }


getUser()