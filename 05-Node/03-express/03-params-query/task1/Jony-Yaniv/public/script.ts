const colorPicker: HTMLElement = document.querySelector('#color-picker');

colorPicker.addEventListener('change', (ev: any) :void => {
    ev.preventDefault();
    const color: string = ev.target.value;
    const bodyElement: HTMLElement = document.querySelector('body');
    bodyElement.style.backgroundColor = color;
    // shoud be on the server ??

    axios.post('/', {color}) // ??
        .then(({ data }) => {
            console.log(data)
        });  
});

axios.get() // ??