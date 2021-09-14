function handleTask(ev) {
    ev.preventDefault();
    try{
    let {
        task,
        itemID,
        status
    } = ev.target.elements;
    task = task.value;
    
    itemID = itemID.valueAsNumber;
    status = "incomplete";
    axios.put('/addListItem', {
            task,
            itemID,
            status
        })
        .then(({
            data
        }) => {
            console.log(data);
        })
        alert("Submitted Succesfuly!")
        
    ev.target.reset();
}catch (e) {
    console.error(e)
}}
const firstForm = document.querySelector(".firstForm")
firstForm.addEventListener("submit", handleTask)


function handleSearchQuery(event) {
    try{
    event.preventDefault();
    const list = document.querySelector(".holder")
    const searchQuery = event.target.children.searchQuery.valueAsNumber;
    axios.get(`/getListQuery?id=${searchQuery}`)
        .then(({
            data
        }) => {
            console.log(data);
        })
    event.target.reset();
    axios.get('/getListItem')
        .then(res => list.innerHTML = res.data.html);
}catch (e) {
    console.error(e)
}}
const secondForm = document.querySelector(".secondForm")
secondForm.addEventListener("submit", handleSearchQuery)



