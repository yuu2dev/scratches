const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true
    }
})

server.listen(3000, () => {
    console.log('chat-room server start')
})

io.on('connection', socket => {
    console.log('[입장]', socket.id)

    socket.on('disconnect', () => {
        console.log('[퇴장]', socket.id)
    })
    // 클라이언트로 부터 수신
    socket.on('chat', (msg) => {
        console.log('[입력]', socket.id, msg)
        // 클라이언트에 회신
        io.emit('chat', { id: socket.id, content: msg })
    })
})

app.use(cors())
app.get('/msgs', (req, res) => {
    return res.json({ 
        ts: (new Date).getTime()
    })
})