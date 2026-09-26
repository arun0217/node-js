const fs = require('fs');
const path = require('path');

const songs = [
  'Here Comes the Sun',
  'Dreams',
  'Billie Jean',
  'Fast Car',
  'Everywhere'
];

const playlistPath = path.join(__dirname, 'playlist.txt');

fs.writeFile(playlistPath, songs.join('\n') + '\n', 'utf8', (error) => {
  if (error) {
    console.error('Could not create the playlist:', error);
    return;
  }

  console.log('Playlist saved to playlist.txt');
});
