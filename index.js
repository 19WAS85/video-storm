const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('Conected')
  socket.on('disconnect', () => console.log('Disconnected'))
})

server.listen(3160)
