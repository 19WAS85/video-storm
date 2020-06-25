const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const PORT = 3160
const WEB_PORT = PORT + 1

io.on('connection', (socket) => {
  console.log('Conected')
  socket.on('disconnect', () => console.log('Disconnected'))
})

app.use(express.static('public'))

server.listen(PORT, () => console.log(`Socket at http://localhost:${PORT}`))
app.listen(WEB_PORT, () => console.log(`App at http://localhost:${WEB_PORT}`))
