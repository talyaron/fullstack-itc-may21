const form: HTMLFormElement = document.querySelector('#jokes-form');

form.addEventListener('submit', ev => handleJoke(ev));

function handleJoke(ev: any): void {
    ev.preventDefault();

    const joke: string = ev.target.elements.newJoke.value;
    console.log(joke);

    axios.post('/addJoke',{ joke })
    .then(res=>{
        console.log(res.data);
    })
    .catch(e=>{
        console.error(e);
    })

    ev.target.reset();
};