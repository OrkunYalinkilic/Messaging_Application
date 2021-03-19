var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.send('Hello');
});

io.on('connection',function (socket) {
    socket.emit('hello');
});

server.listen(5500);