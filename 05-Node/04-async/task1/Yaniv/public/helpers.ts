function getBeverages() {
    return new Promise((resolve,reject) => {
        axios.get("/getBeverages")
        .then(beverages => {
            resolve(beverages);
        }).catch((err) => {
            reject(err);
        });
    });
}