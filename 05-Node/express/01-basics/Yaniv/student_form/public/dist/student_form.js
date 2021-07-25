var submit = document.querySelector('#submit');
var handleSubmit = function (ev) {
    ev.preventDefault();
    var _a = ev.target.elements, studentName = _a.studentName, studentId = _a.studentId;
    studentName = studentName.value;
    studentId = studentId.valueAsNumber;
};
