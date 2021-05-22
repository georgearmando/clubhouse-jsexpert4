import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socket.js"


const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('User Connected!', user))
  .setOnUserDisconnected((user) => console.log('User Disconnected', user))
  .build();

const room = {
  id: '001',
  topic: 'JS Expert Club House'
}

const user = {
  img: 'https://findicons.com/files/icons/169/avatar_boy/128/boy_1.png',
  username: 'George Armando' + Date.now()
}

socket.emit(constants.events.JOIN_ROOM, { user, room })