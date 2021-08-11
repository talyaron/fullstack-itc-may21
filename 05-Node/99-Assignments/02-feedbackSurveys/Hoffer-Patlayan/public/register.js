const handleSubmit = async (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

axios({

    method: "post",
    url: `/signUp/registerUser`,
    data: {
      name,   
      email,
      password
    },



})
.then(({ data }) => console.log(data))
.catch((err) => {
  console.log(err);
});


//   axios.post("/signUp/registerUser", {
//     name,
//     email,
//     password,
//   })
//   .then(({data})= console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });
};
