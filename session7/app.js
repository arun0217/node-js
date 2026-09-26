const playlist = require('./playlist');

console.log('My updated favorite songs:');
playlist.forEach((song) => console.log(`- ${song}`));
