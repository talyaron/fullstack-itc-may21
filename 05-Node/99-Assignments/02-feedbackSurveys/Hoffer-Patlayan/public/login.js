const handleLogin= (event)=> {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
axios({

    method: "post",
    url: `/logIn/postLogIn`,
    data: {   
      email,
      password
    },



})
.then(({ data }) => console.log(data))
.catch((err) => {
  console.log(err);
});
window.location.href = 'survey.html'

event.target.reset();
}