// QUERY SELECTOR 
const userTitle = document.querySelector('#title_user');  
const submiBtn = document.querySelector('#submiBtn');  
const logout = document.querySelector('#logout');  
// EVENTLISTENERS
// submiBtn.addEventListener('click', getUserMain); 
logout.addEventListener('click', logOut); 

// HANDLE FORM VALUES 
    function handleSubmit(e){
        try{
        let name = e.target.elements.name.value;
        const user = name;
        getInfo(user);
        }catch(e){console.error(e)}
    }
    // POST FORM VALUE 
    async function getInfo(user){
        try{
        const response = await axios(`/setCookie/${user}`);
        return response.data;
        }catch(e){console.error(e)}
    }
// GET USER AND RENDER
    async function getUserMain(){
        try{
        const response = await axios(`/readCookies`);
        if(response.data.name === undefined){
            userTitle.innerHTML = ``
        }else{
            
            userTitle.innerHTML = `Welcome ${response.data.name}, you are Log In. Visit our Second Page!`
        }
    }catch(e){console.error(e)}
    }
getUserMain();

// LOGOUT 
async function logOut(){
    const response = await axios(`/removeCookie`);
    userTitle.innerHTML = ``;
    userTitle.style.border = 'none'
}