const postTask = (event) => {
  event.preventDefault();

  let { name, description } = event.target.elements;
  name = name.value;
  description = description.value;
  axios({
    method: "post",
    url: `/addTask`,
    data: {
      name,
      description,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => renderTask(data))
    .catch((err) => {
      console.log(err);
    });

  event.target.reset();
};

const deletePromise = async (id) => {
  const deleteTask = await fetch(`/deleteTask/${id}`, {
    method: "DELETE",
  });
  const deletes = await deleteTask.json();
  renderTask(deletes);
};

const updatePromise = async (event) => {

  let { name, description } = event.target.elements;
  name = name.value;
  description = description.value;
  const updateTask = await fetch(`/updateTask/${id}`, {
    method: "put",
    data: { name, description },
  });
  const updates = await updateTask.json();
  renderTask(updates);
};

function renderTask(data) {
  let html = "";
  data.forEach((task) => {
    html += `
    <tr>

             
    <td>${task.name}</td>
    <td>${task.description}</td>
    
    <td class="text-center">
    <input type="checkbox">
    </td>
    <td class="text-right">
    <button type="button" class ="btn btn-primary mb-1"  data-toggle="modal" data-target="#exampleModal" >
    <i class="fa fa-pencil"></i>
    </button>
    <button onclick="deletePromise('${task.id}')" class="btn btn-danger mb-1 ml-1">
    <i class="fa fa-trash"></i>
    </button>
    </td>
    </tr>
     
   `;
  });

  document.getElementById("root").innerHTML = html;
}

async function getAllTasks() {
  const getTask = await fetch(`/getTask`, { method: "get" });
  const add = await getTask.json();
  renderTask(add);
}

getAllTasks();
