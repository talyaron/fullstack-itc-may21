const noteText = document.querySelector('#text');
const submitBtn = document.querySelector('#submit');
const todosContainer = document.querySelector('#todosContainer');
const token = JSON.parse(localStorage.getItem('token'));

const handleNewUser = async (e) => {
  e.preventDefault();
  const noteText = document.querySelector('#text');
  const todo = noteText.value;
  await addTodo(todo);
};


const renderTodos = (todosArray) => {
  todosContainer.innerHTML = '';

  todosArray.forEach((todo) => {
    const todoHtml = `<div id='todo'>
                        <h3>${todo.text}</h3>
                        <p>createdBy: ${todo.text}</p>
                      </div>`;

    todosContainer.insertAdjacentHTML('afterbegin', todoHtml);
  });
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

submitBtn.addEventListener('click', (e) => handleNewUser(e));
