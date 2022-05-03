let rooms = { };

function subscribe(room, client) {
  if(!rooms[room]) rooms[room] = [];

  rooms[room].push(client);
}

function publish(room, message) {
  if(!rooms[room]) return;

  for(let i=0; i < rooms[room].length; i++) {
    rooms[room][i](message);
  }
}

function chatRoomA(message) {
  console.log('chatRoomA received: ', message);
}

function clientA(message) {
  console.log('clientA received message: ', message);
}

function clientB(message) {
  console.log('clientB received message: ', message);
}

subscribe('rooma', chatRoomA);
subscribe('rooma', clientA);
subscribe('rooma', clientB);

publish('rooma', 'hello from clientA');
publish('rooma', 'hello from clientB');
