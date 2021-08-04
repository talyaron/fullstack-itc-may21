async function getToDos() {
  try {
    const response = await axios.get("/todo-list");
    const toDos = await response.json(); // this will require a JSON.parse when toDos is used
    return toDos;

  } catch (error) {
    console.error(error);
  }
}

async function postToDo(toDo) {
  try {
    const response = await axios.post("/post-todo", toDo);
    const toDos = await response.json(); // this will require a JSON.parse when toDos is used
    return toDos;
    
  } catch (error) {
    console.error(error);
  }
}

async function searchToDos(toDoContent, toDoStatus) {
  try {
    const response = await axios.get(`/todo?content=${toDoContent}&status=${toDoStatus}`);
    const searchedToDos = await response.json(); // this will require a JSON.parse when toDos is used
    return searchedToDos;

  } catch (error) {
    console.error(error);
  }
}

async function putToDo(toDoUuid) {
    try {
      const response = await axios.put(`/todo/${toDoUuid}`);
      const toDos = await response.json(); // this will require a JSON.parse when toDos is used
      return toDos;
  
    } catch (error) {
      console.error(error);
    }
  }

async function deleteToDo(toDoUuid) {
    try {
      const response = await axios.delete(`/todo/${toDoUuid}`);
      const toDos = await response.json(); // this will require a JSON.parse when toDos is used
      return toDos;
  
    } catch (error) {
      console.error(error);
    }
  }