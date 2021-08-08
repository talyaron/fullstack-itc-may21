async function getData(toDoContent: string, toDoStatus: string): Promise<any> {
  const dataToFetch: any = ((!toDoContent) && (!toDoStatus)) ? await getToDos() : await searchToDos(toDoContent, toDoStatus);
  const dataToRender: ToDos | string = (typeof dataToFetch.data === "string") ? dataToFetch.data : new ToDos(dataToFetch.data);

  const upcomingRoot: HTMLElement = document.querySelector(".upcoming");
  const laterRoot: HTMLElement = document.querySelector(".later");

  if (typeof dataToRender === "string") {
    upcomingRoot.innerHTML = `<h3>${dataToRender}</h3>`;
    laterRoot.innerHTML = '';

    if (dataToRender !== 'Your to-do list is empty. Go do something you love 🤩') return;

    for (let i = 0; i < searchToDosForm.children.length; i++) {
      searchToDosForm.children[i].disabled = true;
    }
    return;
  }

  dataToRender.renderToDos();
}

async function getToDos() {
  try {
    const toDos = await axios.get("/todo-list");
    return toDos;

  } catch (error) {
    console.error(error);
  }
}

async function postToDo(toDo) {
  try {
    const toDos = await axios.post("/post-todo", toDo);
    return toDos;
    
  } catch (error) {
    console.error(error);
  }
}

async function searchToDos(toDoContent, toDoStatus) {
  try {
    const searchedToDos = await axios.get(`/todo?content=${toDoContent}&status=${toDoStatus}`); //YS: Cool
    return searchedToDos;

  } catch (error) {
    console.error(error);
  }
}

async function putToDo(toDo) {
    try {
      const toDos = await axios.put(`/todo/${toDo.uuid}`, toDo);
      return toDos;
  
    } catch (error) {
      console.error(error);
    }
  }

async function deleteToDo(toDoUuid) {
    try {
      const toDos = await axios.delete(`/todo/${toDoUuid}`);
      return toDos;
  
    } catch (error) {
      console.error(error);
    }
  }