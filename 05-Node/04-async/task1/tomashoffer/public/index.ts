function getJoke(){
    
    return new Promise((resolve, reject)=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(r=>r.json())
        .then(joke=>{
            resolve(joke)
        })
        .catch((e)=>{
            reject(e)
        })
    })
}