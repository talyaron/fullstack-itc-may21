/* CRUD API operations with Axios */

// GET
async function getAllTasks() {
    const tasksData = await axios.get('http://localhost:3000/tasks')
    return tasksData.data
}
// POST
async function postTask(text) {
    const res = await axios.post('http://localhost:3000/tasks', { text })
    console.log(res);
    return res.data
}
// PUT
async function putTask(task) {
    const res = await axios.put('http://localhost:3000/tasks', { task })
    console.log(res);
    return res.data
}
// DELETE
async function deleteTask(taskId) {
    const res = await axios.delete(`http://localhost:3000/tasks/${taskId}`)
    console.log(res);
    return res.data

}