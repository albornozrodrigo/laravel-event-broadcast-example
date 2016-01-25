//require modules
var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var Redis   = require('ioredis');
var redis   = new Redis();
var socket  = require('socket.io')(http, {
  rememberTransport: false,
  transports: ['websocket', 'flashsocket', 'polling']
});

//configuration
var port = process.env.PORT || 3000;

//subscribe to some channels on redis
redis.subscribe('test-channel', function(error, count){
	//some logic here
});

//message event listener
redis.on('message', function(channel, message) {
  console.log('Message received: ' + message);
  message = JSON.parse(message);
  socket.emit(channel + ':' + message.event, message.data);
});

//server listener
http.listen(port, function() {
  console.log('Server running on port: ' + port);
});

app.get('/', function(req, res) {
  res.send('<h1>Hello websocket!</h1>');
});