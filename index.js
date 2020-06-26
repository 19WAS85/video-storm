const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const SERVER_PORT = 3160
const WEB_PORT = SERVER_PORT + 1

io.on('connection', (socket) => {
  console.log('Conected')
  socket.on('disconnect', () => console.log('Disconnected'))
  socket.on('new-image', (uid, data) => {
    socket.compress(false).broadcast.emit('image-sent', uid, data)
  })
})

app.use(express.static('public'))

server.listen(SERVER_PORT)
app.listen(WEB_PORT, () => console.log(` => http://localhost:${WEB_PORT}`))
