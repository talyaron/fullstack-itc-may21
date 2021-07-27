//form
const form = document.getElementById('form')

//btn
const btnGetData = document.querySelector('.getData')
const btnUpdateData = document.querySelector('.updateData')

//board
const boardRoot = document.querySelector('#board')

//input
const inputName = document.querySelector('.name')
const inputID = document.querySelector('.id')
const inputRegrex = document.querySelector('.regrex')

//addEventListener
btnGetData.addEventListener('click', getData)
btnUpdateData.addEventListener('click', updateData)
form.addEventListener('submit', handleSumbit)

function getData() {
    let html = ''
    axios.get('/getAvengers')
        .then(({ data }) => {
            render(html, data)
        })
}

function updateData() {
    let html = ''
    const name = inputName.value
    const id = inputID.valueAsNumber
    axios.put('/updateAvenger', { name, id })
        .then(({ data }) => {
            render(html, data)
        })

}

inputRegrex.addEventListener('keyup', getDataKeyUp)

function getDataKeyUp() {
    let html = ''
    const regrex = inputRegrex.value
    axios.get(`/getAvengersbyName?name=${regrex}`)
        .then(({ data }) => {
            render(html, data)
        })

}

function deleteData(id) {
    let html = ''
    axios.delete('/deleteAvenger', { data: { id: parseInt(id) } })
        .then(({ data }) => {
            render(html, data)
        })
}



function handleSumbit(event) {

    event.preventDefault();

    try {
        const name = event.target.elements.name.value
        const id = event.target.elements.id.valueAsNumber;
        axios.post('/addAvenger', { name, id })
        //
    } catch (e) {
        console.log(e);
    }

}

function render(html, data){
    data.forEach(elem => {
        html += `<div class="container__board--element">ID: ${elem.id} - Name: ${elem.name}
        <i class="fa fa-trash " onclick='deleteData("${elem.id}")' title="Delete Item"></i></div> `
    });
    boardRoot.innerHTML = html
}