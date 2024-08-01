const express = require('express');
const router = require('./router/router')
const app = express();

// Modelo da API JSON
app.use(express.json());
app.use('/api/user', router);
// REQ -> Requisição
// RES -> Response

app.get('/healthcheck', (req, res) => {
    //200 -> Ok
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    })
})


// Listen -> ouvir ( 8080 )
app.listen(8080, () => {
    console.log("Estamos online na http:8080")
})