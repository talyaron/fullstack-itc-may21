//btn
const btnGetData = document.querySelector('.getData')
const btnUpdateData = document.querySelector('.updateData')
const btnADDdata = document.querySelector('.addData')

//board
const boardRoot = document.querySelector('#board')

//input
const inputName = document.querySelector('.name')
const inputID = document.querySelector('.id')
const inputRegrex = document.querySelector('.regrex')


btnGetData.addEventListener('click', getData)
btnUpdateData.addEventListener('click', updateData)
btnADDdata.addEventListener('click', addData)


let dataAvenger;

function getData(ev) {
    let html = ''
    ev.preventDefault()
    axios.get('/getAvengers')
        .then(({ data }) => {
            render(html, data)
        })
}

function updateData(ev) {
    let html = ''
    ev.preventDefault()
    const name = inputName.value
    const id = inputID.valueAsNumber
    axios.put('/updateAvenger', { name, id })
        .then(({ data }) => {
            render(html, data)
        })

}

inputRegrex.addEventListener('keyup', getDataKeyUp)

function getDataKeyUp(ev) {
    let html = ''
    ev.preventDefault()
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



function addData(ev) {


    try {
        ev.preventDefault()

        const name = inputName.value
        const id = inputID.valueAsNumber


        axios.post('/addAvenger', { name, id })

    } catch (e) {
        console.log(e);
    }

}

function render(html, data) {
    dataAvenger = data;
    data.forEach(elem => {
        html += `<div class="container__board--element">Name: ${elem.name}
        <i class="fa fa-trash " onclick='deleteData("${elem.id}")' title="Delete Item"></i>
        <i class="fas fa-edit " onclick='handleEdit("${elem.id}")' title="Click on the edit item and then edit"></i></div> `
    });
    boardRoot.innerHTML = html
}

function handleEdit(id) {
    const avenger = dataAvenger.find(avenger => avenger.id = id)
    inputName.value = avenger.name;
    inputID.value = avenger.id;


}