const handleLogin= (event)=> {
  // try {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    // if(email===''|| password === '') throw new Error('Please fill all the inputs');
    
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
  // } catch (error) {
  //   // alert(error)
  // }

window.location.href = 'survey.html'

event.target.reset();
}