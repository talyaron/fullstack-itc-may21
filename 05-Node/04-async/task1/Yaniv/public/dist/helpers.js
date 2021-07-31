function getBeverages() {
    return new Promise(function (resolve, reject) {
        axios.get("/getBeverages")
            .then(function (beverages) {
            resolve(beverages);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
