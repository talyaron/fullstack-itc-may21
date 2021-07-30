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
    console.log(name, age);
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

    ev.target.reset();
}catch (e) {
    console.error(e)
}}


function handleStudentSearchQuery(event) {
    try{
    event.preventDefault();
    const list = document.querySelector("#root")
    const searchQuery = event.target.children.searchQuery.valueAsNumber;
    console.log(searchQuery)
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


function handleStudentSearchParam(event){
    event.preventDefault();
    try{
    const list = document.querySelector("#root")
    const searchParam = event.target.children.searchParam.valueAsNumber;
    console.log(searchParam)
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
