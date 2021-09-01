async function selectedProd(){
    const getUsers = await axios(`/user/getUsers`);
    const data = getUsers.data;
    console.log(data);
    renderUsers(data);
  }
  selectedProd()

function renderUsers(usuarios){
    const root = document.querySelector(".cards");
    let html = "";
    usuarios.forEach((prod) => {
        html += `<div class="card" style="width: 18rem;">
        <img src="${prod.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prod.name}</h5>
          <p>Favorite Color</p>
          <i style="color: ${prod.color}" class="fa-4x fas fa-square-full"></i>
        </div>
      </div> `;
      });
    root.innerHTML = html;
  }  

//   renderUsers();