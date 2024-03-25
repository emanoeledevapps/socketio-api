const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}});

const PORT = process.env.PORT ? process.env.PORT : 3001;

io.on('connection', socket => {
    console.log('new-user => ' + socket.id);

    socket.on('disconnect', reason => {
        console.log('user-disconnect => ' + socket.id);
    });

    socket.on('update-score-game', data => {
        socket.emit('update-game', data)
    })
})

server.listen(PORT, () => console.log('Server Running'));