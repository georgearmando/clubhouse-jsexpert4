export const constants = {
  socketUrl: 'localhost:3000',
  socketNamespaces: {
    room: 'room',
    lobby: 'lobby'
  },
  events: {
    USER_CONNECTED: 'userConnection',
    USER_DISCONNECTED: 'userDisconnection',

    JOIN_ROOM: 'joinRoom',
    LOBBY_UPDATED: 'lobbyUpdated'
  }
}