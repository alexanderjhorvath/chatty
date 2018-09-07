const express = require('express');
const SocketServer = require('ws');
const uuidv4 = require('uuid/v4');

const id = uuidv4();
console.log(id);

//setting port to 3001
const PORT = 3001;

const clients = [];

//create a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

//creating websockets Server
const wss = new SocketServer.Server({ server });

//callback that will run when a client connects
wss.on('connection', (ws) => {
  clients.push(ws);
  let usersOnline = {
    amount: clients.length,
    type: "incomingUserCount"
  }
  clients.forEach(sock => {
    if (sock.readyState === SocketServer.OPEN) {
      sock.send(JSON.stringify(usersOnline));
    }
  })
  ws.on('message', function incoming(event) {
    let message = JSON.parse(event);

    // changing message type from post to incoming
    if (message.type === "postMessage") {
      message.type = "incomingMessage"
    } else if (message.type === "postNotification") {
      message.type = "incomingNotification"
    }

    // adding message ID
    message.id = uuidv4();

    //broadcasting return message
    clients.forEach(sock => {
      if (sock.readyState === SocketServer.OPEN) {
        sock.send(JSON.stringify(message));
      }
    });
  });

  ws.on('close', (close) => {
    clients.pop();
    let usersOnline = {
      amount: clients.length,
      type: "incomingUserCount"
    }
    clients.forEach(sock => {
      if (sock.readyState === SocketServer.OPEN) {
        sock.send(JSON.stringify(usersOnline));
      }
    })
    console.log('Client disconnected');
  });
});

// wss.broadcast = function broadcast(data) {
//   wss.clients.forEach(function each(client) {
//     if (client.readyState === SocketServer.OPEN) {
//       client.sent(JSON.stringify(data))
//     }
//   });
// };
