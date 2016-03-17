var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('new-url', function (url) {
        var type = 'youtube';

        if (url.indexOf('youtube.com')){
            url = url.replace('https://www.youtube.com/watch?v=', '');
            type = 'youtube';
        }

        console.log('new-url received', url);
        io.sockets.emit('new-url', {url: url, type: type});
    });
});

http.listen(61000, function () {
    console.log('listening on *:61000');
});