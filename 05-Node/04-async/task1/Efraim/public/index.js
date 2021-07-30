


async function getInfo(){
    // console.time('beverages')
    // fetch('/getData')
    // .then(r=>r.json())
    // .then(beverages=>{
    //     console.log(beverages);
    //     console.timeEnd('beverages')
    //     renderbeverages(beverages);
        
    //     //callback hell (or promise hell)
    //     console.time('joke')
    //     fetch('https://api.chucknorris.io/jokes/random')
    //     .then(r=>r.json())
    //     .then(joke=>{
    //         console.log(joke.value);
           
    //        console.timeEnd('joke');
    //     })
       
    // })

const beverage = await axios.get('/getData');
console.log(beverage.data)
renderBeverage(beverage)

   


}

//redner to the DOM
function renderBeverage(data){
    console.log(data)
    let html = '';
    data.data.forEach(beverage=>{
        html += `<p>${beverage.name}</p><img src="${beverage.image}">`
    })

    document.getElementById('root').innerHTML = html;
}

getInfo();


// renderbeverages(beverages);