function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
    event.currentTarget.style.borderRadius = '0px';
}

function onDragOver(event) {
    event.preventDefault();
}

async function onDrop(event) {
    const idDraggable = event.dataTransfer.getData('text');
    const idDropeable = event.target.id;

    const draggableElement = document.getElementById(idDraggable);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();

    let tasksData = await axios.put(`/editStatusTask/${idDraggable}/${idDropeable}`);
    const { tasks } = tasksData.data;
    renderTask(tasks);
}