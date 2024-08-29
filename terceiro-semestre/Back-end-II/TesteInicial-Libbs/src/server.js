require('dotenv').config();     

const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');
const User = require('./models/User');
const Produto = require
('./models/Produto');
const app = express();

// Modelo da API JSON
app.use(express.json());
app.use('/api/', router);
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
sequelize.authenticate()
.then(async () => {
    console.log('Conexão com o BD SQL estabelecida com sucesso.');
    await sequelize.sync(); //sincronizar a tabela com o código
})
.then(() => {
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
        console.log('Servidor online na porta 8080')
    });
})
.catch((error) => {
    console.error('Erro ao se conectar com o banco', error)
})