const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

class Jugadores {
    list = [];
    addJugador(jugador) {
        this.list.push(jugador);
    }
}

const jugadores = new Jugadores();

//Esto lo tengo que escribir si o si para parsear el body
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Esta es la banda loca del fortin!')
})

app.post('/agregarJugador', (req, res) => {
    try {
        //Con esto desestructuro el objeto y me quedo con la variable body
        const { body } = req;
        const { name, id } = body;

        if (!name || !id) {
            throw new Error('El objeto cargado es incorrecto no tiene "name" o "id"')
        }

        jugadores.addJugador(body);
        console.log(jugadores.list);
        res.send(jugadores.list)

    } catch (error) {
        console.log(error);
        res.status(400).send({ error: e.message });
    }
})

app.listen(port, () => {
    console.log(`El codigo se esta ejecutando en el puerto: ${port}`)
})