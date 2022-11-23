const net = require('net');
const port = 8009;

const server = net.createServer();

const connectedClients = [];

const broadcast = (message, author) => {
  for (let destinationClient of connectedClients){
    const outgoingMessage = author.name + ": " + message;
    if (destinationClient !== author){
      destinationClient.write(outgoingMessage);
    }
  }
};

server.on('connection', (client) => {
  connectedClients.push(client);
  console.log('Connection has been made by client.');
  client.setEncoding('utf8');

  client.write('Welcome to my awesome server! ⛵');

  client.on('data', (message) => {
    console.log(`Message received: ${message}`);
    if (message.startsWith('setName ')){
      const clientName = message.replace(/setName /, '');
      console.log('setting client name to:', clientName);
      client.name = clientName;
    } else {
      broadcast(message, client);
    }
  });
});

server.listen(port, function (){
  console.log(`Server is listening on port=${port}`);
});
