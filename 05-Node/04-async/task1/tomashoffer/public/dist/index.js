function getJoke() {
    return new Promise(function (resolve, reject) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(function (r) { return r.json(); })
            .then(function (joke) {
            resolve(joke);
        })["catch"](function (e) {
            reject(e);
        });
    });
}
