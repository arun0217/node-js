const fs = require('node:fs');
const path = require('node:path');

const playlistPath = path.join(__dirname, 'playlist.txt');

fs.readFile(playlistPath, 'utf8', (error, songs) => {
  if (error) {
    console.error('Could not read the playlist:', error.message);
    return;
  }

  process.stdout.write(songs);
});
