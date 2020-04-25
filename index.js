//Inits app to be function handler to supply to HTTP server
var app = require('express')();
var http = require('http').createServer(app);

//Define route handler
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

//Define port
http.listen(3000, () => {
  console.log('listening on *:3000');
});