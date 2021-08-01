getBeverage();

// async function getInfo() {
//     const r = await fetch('/getBeve');
//     const beve = await r.json();
//     renderBeve(beve)
// }

// function getInfoa(){
//     fetch('/getBeve')
//     .then(r=>r.json())
//     .then(data=> renderBeve(data))
// }   

async function getBeverage(){
    // const beve = new getBeve()
    // beve.then(data=>renderBeve(data))
    const beve = await getBeve()
    renderBeve(beve)
}


function getBeve(){
    return new Promise((resolve, reject)=>{
        fetch('/getBeve')
        .then(r=>r.json())
        .then(beve=> {resolve(beve)})
        .catch(e=> {
            reject(e)
        })
    })
}


function renderBeve(data) {
    let html = '';
    data.forEach(beve => {
        html += `<p>${beve.text}</p>
                <img src=${beve.img} width="200" height="200"/>`
    })

    document.querySelector('#root').innerHTML = html;
}