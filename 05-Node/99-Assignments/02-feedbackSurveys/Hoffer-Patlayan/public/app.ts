
class User {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    (this.name = name), (this.email = email), (this.password = password);
  }
}

class UserArray {
  userArray: Array<User> = [];

  add(add: User): void {
    this.userArray.push(add);
    // fs.writeFileSync("./users.json", JSON.stringify(this.userArray));
  }
}
const userArrayNew = new UserArray();
const handleSubmit = async (event) => {
  event.preventDefault();

  const name: string = event.target.elements.name.value;
  const email: string = event.target.elements.email.value;
  const password: string = event.target.elements.password.value;

  
  const user = new User(name, email, password);

  fetch('/signUp/registerUser', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(user), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  
  console.log(user);

  userArrayNew.add(user);
};


// async function postUser(user){
//     try{
//     const response = await axios.post(`/setCookie`, user);
//     return response.data;
//     }catch(e){console.error(e)}
// }