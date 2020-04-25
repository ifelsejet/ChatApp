//Inits app to be function handler to supply to HTTP server
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//Define route handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
  });

//Define port
http.listen(3000, () => {
  console.log('listening on *:3000');
});