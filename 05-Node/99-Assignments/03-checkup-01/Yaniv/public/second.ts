const doSomething1Form: HTMLFormElement = document.querySelector('#do-something-1-form');
doSomething1Form.addEventListener('submit', doSomething1);

async function doSomething1(ev){
    try {
        ev.preventDefault();

        const clientInput1 = ev.target.elements.clientInput1.value;
        const {data, error} = await axios.post('/items/doSomething1',{Input1ModelName:clientInput1});
        const {clientOutput} = data;

        renderItems(clientOutput) // if clientOutput are items to render
        // console.log(clientOutput);

        ev.target.reset();

    } catch (error) {
        console.error(error.message);
    }
}
