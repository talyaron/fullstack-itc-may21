const postTask = async (event) => {
event.preventDefault();

let {name}= event.target.elements;
name= name.value;

// const addTask = await fetch(`/addTask`,{method:"POST",data:{name}, headers: {
//     "Content-Type": "application/json",
//   }});

// const add = await addTask.json();

// renderTask(add)
axios({
    method: "post",
    url: `/addTask`,
    data: {
      name
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(({ data }) => renderTask(data))
    .catch((err) => {
      console.log(err);
    });





 }


 function renderTask(data) { 
    let html = "";
    data.forEach((task) => {
      html += `<p>${task.name}</p>`
    //   <p>${task.age}</p>
    //   <p>${task.avgrade}</p>
    //             <button onclick='deletePromise(${task.id})'>Delete</button>; //YS: Very nice! 
    });
  
    document.getElementById("root").innerHTML = html;
  }
//   window.onload= renderTask(data)