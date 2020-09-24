const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const localPort = 3300;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(process.env.PORT || localPort, function() {
  console.log('Server running on ' + server.address().port);
});

let allMessages = [];

io.on('connection', function(socket) {
  console.log('User connected:', socket.id);
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  
  if (allMessages.length > 0) {
    socket.emit('allMessages', allMessages);
  }

  socket.on('sendMessage', function(obj) {
    obj.color = color;
    allMessages.push(obj);
    io.emit('receiveMessage', obj);
  });

  socket.on('disconnect', function() {
    console.log('User disconnected:', socket.id)
  });
});
