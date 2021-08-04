
function handelSubmit(event){

    try {
        event.preventDefault();

    const name= event.target.elements.name.value;
    const age= event.target.elements.age.value;
    const grade= event.target.elements.grade.value;
    if(!name || !age || !grade){
        throw new Error("One of the fields is Empty or Invalid")
    }
    axios.post('/addStudent', { name,  age, grade });
    } catch (error) {
        console.error(error)
    }
  
}


