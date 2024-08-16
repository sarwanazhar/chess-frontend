import { io, Socket } from 'socket.io-client'

const socket: Socket = io(`https://secret-chess-backend-production.up.railway.app/`, {
    autoConnect: false
})

export default socket