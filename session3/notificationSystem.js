const EventEmitter = require('events');

const notificationSystem = new EventEmitter();

notificationSystem.on('newMessage', () => {
  console.log('You have a new message!');
});

notificationSystem.on('newFollower', (username) => {
  console.log(`You are followed by ${username}`);
});

// Example incoming events
notificationSystem.emit('newMessage');
notificationSystem.emit('newFollower', 'alex');
