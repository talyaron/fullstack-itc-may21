const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`
    <div>
        <h1 style="background:blue">Esta es la gloriosa pagina del Fortin!</h1>
        <p style="color:blue">Esta es la historia del club mas grande de America</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg/896px-Escudo_del_Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield.svg.png" alt="Escudo Velez" width="500" height="600">
    </div>`);
}

const server = http.createServer(requestListener);
server.listen(3000, () => { console.log('Listen on port 3000') });
