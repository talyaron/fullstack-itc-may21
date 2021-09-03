

async function getUsers(){

    try {
        const {data} = await axios('/users/userInfo');
        const{users}=data;

        renderUsers(users);
    } catch (error) {
        
    }
}



function renderUsers(users){
    try {
        const root=document.getElementById('root');
        let html='';
        users.forEach(userElement=>{
            html+=`
            
             <div class = "user-item" >
              <div class = "user-img">
                <img src = "${userElement.img}" alt = "user-image">
              </div>
              <div class = "user-content" style="background-color:#${userElement.color}" >
                <h2 class = "user-name">${userElement.name}</h2>
              </div>
            </div> 
            
            
            `
        })

        root.innerHTML = html;

    } catch (error) {
        
    }
}

getUsers();