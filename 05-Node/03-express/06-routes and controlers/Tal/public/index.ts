function getImages(route) {
    try {
        return new Promise((resolve, reject) => {
            fetch(route)
                .then(r => r.json())
                .then(data => { resolve(data); })
                .catch(err => { reject(err); })
        })
    } catch (err) { console.log(err); }
}
(async ()=>{
    console.log(await getImages('/beaches/all'));
    console.log(await getImages('/drinks/all'));
})();
