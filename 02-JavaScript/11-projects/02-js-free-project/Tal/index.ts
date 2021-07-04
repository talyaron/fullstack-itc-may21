interface User{
    name:string;
    id:string;
}
const users:Array<User> = [];

const handleSubmit = (ev:any)=> {
    ev.preventDefault();

    const id = `Id_${Math.random()}`;
    const name:string = ev.target.elements.name.value;

    users.push({name, id});
    renderUsers(users);
    window.localStorage.setItem('users',JSON.stringify(users));
    ev.target.reset();

    console.log(users)
}

function renderUsers(users:Array<User>){
   let usersHTML = users.map(user=>{
        return `<p onclick="handleRedirect('${user.id}')">${user.name}</p>`
    }).join('');

    document.querySelector('#usersRoot').innerHTML = usersHTML;
}

function handleRedirect(userId){
    console.log(userId);
    window.location.href=`user.html?userId=${userId}`;
}