import express from "express";
import http from "http";
import path from "path";
import { createServer } from 'http'; // Importing createServer function from http module

const app = express();
const PORT = 3000;

import { Server } from 'socket.io';
const server = createServer(app); // Creating the server with the createServer function

const io = new Server(server);

io.on('connection', (socket) => {
    socket.on("message",(message)=>{
io.emit("message",message)
  })
});

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve("./public/index.html")); // Fixing the path for sending the file
});

server.listen(PORT, () => { // Using PORT variable for server listening
    console.log(`Server started on port ${PORT}`);
});
