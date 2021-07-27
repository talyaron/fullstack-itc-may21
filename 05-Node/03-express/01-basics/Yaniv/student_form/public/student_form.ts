const submit:HTMLElement = document.querySelector('#submit');
const handleSubmit = (ev: any) => {
    ev.preventDefault();
    let { studentName , studentId } = ev.target.elements;
    studentName = studentName.value;
    studentId = studentId.valueAsNumber;
}