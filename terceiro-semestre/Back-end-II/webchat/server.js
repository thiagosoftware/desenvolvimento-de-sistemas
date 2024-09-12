const express = require("express");
const http = require("http");
const { Server } = require('socket.io');

const app = express();// Iniciando servidor express
const server = http.createServer(app) // Criando server 

const io = new Server(server); // Web socket

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let esperandoUsuario = null;

io.on("connection", (socket) => {

    console.log("Um usuário se conectou.");

    socket.on("set username", (username) => {
        socket.username = username;
        //quem conectou na sala
        console.log(`${username} entrou na sala.`);

        if (esperandoUsuario) {
            //se  ha um usuário esperando, emparelho os dois
            socket.partner = esperandoUsuario;
            esperandoUsuario.partner = socket;
            //notificar os usuários conectados
            esperandoUsuario.emit('chat start', `Falando com ${socket.username}`);
            socket.emit("chat start", `Falando com: ${esperandoUsuario.username}`);
        } else {
            //se não tem ninguêm está esperando, coloco ele como próximo
            esperandoUsuario = socket;
            socket.emit('waiting', "Aguardando um usuário para conversar...")
        }
    });

    //enviar menssagem
    socket.on("chat message", (msg) => {
        if(socket.partner) {
            socket.partner.emit('chat message', `${socket.username}: ${msg}`)
        }
    })

    //se desconectar
    socket.on("manual disconnect", () => {
        if (socket.partner) {
            socket.partner.emit("chat end", `${socket.username} desconectou.`);
            socket.partner.partner = null;
            socket.partner = null;
        }
        socket.emit("chat end", "Você desconectou.")
    })

    //lidar com desconexão
    socket.on("disconnect", () =>{
        console.log("Usuário se desconectou");
        if(socket.partner) {
            socket.partner.emit('chat end', `${socket.username} desconectou`);
            socket.partner.partner = null;
        }
        if (esperandoUsuario === socket) [
            esperandoUsuario = null
        ]
    })
});

server.listen(3000, () => {
    console.log('Servidor na porta 3000');
    
})