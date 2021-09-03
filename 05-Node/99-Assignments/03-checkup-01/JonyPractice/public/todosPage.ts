const noteText = document.querySelector('#text') as HTMLInputElement;
const submitBtn = document.querySelector('#submit');
const todosContainer = document.querySelector('#todosContainer');
const token = JSON.parse(localStorage.getItem('token'));

submitBtn.addEventListener('click', (e) => handleNewUser(e));

const handleNewUser = async (e) => {
    e.preventDefault();
    const todo = noteText.value;
    await addTodo(todo);
  };
  
  const addTodo = async (todo) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post('todos/addTodo', { todo }, { headers: headers });
      renderTodos(response.data);
    } catch (err) {
      console.log(err);
    }
};

