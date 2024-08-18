import { io, Socket } from 'socket.io-client'

const socket: Socket = io(`http://localhost:8080/`, {
    autoConnect: false
})

export default socket