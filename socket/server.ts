var server = require('http').createServer();
var ioStatic: SocketIOStatic = require('socket.io');
var io: SocketIO.Server = ioStatic(server);

io.on('connection', (socket: SocketIO.Socket) => {
  console.log('user connected');

  socket.on('event', data => {
    console.log(data);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  let i = 0;
  setInterval(() => {
    socket.emit('message', {
      message: 'Hello',
      id: i++
    });
  }, 1000);
});

server.listen(3000);