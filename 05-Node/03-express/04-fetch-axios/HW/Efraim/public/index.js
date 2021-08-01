//For Yonotan: I finished assignment before fridays class which is why I didn't use the newest promise methods.. I will do from now on!
function handleStudent(ev) {
    ev.preventDefault();
    try{
    let {
        name,
        age,
        studentID,
        averageGrade
    } = ev.target.elements;
    name = name.value;
    age = age.valueAsNumber;
    studentID = studentID.valueAsNumber;
    averageGrade = averageGrade.valueAsNumber;
    axios.put('/addStudent', {
            name,
            age,
            studentID,
            averageGrade
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
firstForm.addEventListener("submit", handleStudent)


function handleStudentSearchQuery(event) {
    try{
    event.preventDefault();
    const list = document.querySelector(".holder")
    const searchQuery = event.target.children.searchQuery.valueAsNumber;
    axios.get(`/getStudentQuery?id=${searchQuery}`)
        .then(({
            data
        }) => {
            console.log(data);
        })
    event.target.reset();
    axios.get('/getStud')
        .then(res => list.innerHTML = res.data.html);
}catch (e) {
    console.error(e)
}}
const secondForm = document.querySelector(".secondForm")
secondForm.addEventListener("submit", handleStudentSearchQuery)


function handleStudentSearchParam(event){
    event.preventDefault();
    try{
    const list = document.querySelector(".holder")
    const searchParam = event.target.children.searchParam.valueAsNumber;
    axios.get(`/getStudentParam/${searchParam}`)
        .then(({
            data
        }) => {
            console.log(data);
        })
    event.target.reset();
    axios.get('/getStud')
        .then(res => list.innerHTML = res.data.html);
} catch (e) {
    console.error(e)
}}
const thirdForm = document.querySelector(".thirdForm")
thirdForm.addEventListener("submit", handleStudentSearchParam)
