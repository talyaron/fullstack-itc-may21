

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

getUser()