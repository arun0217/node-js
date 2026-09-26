const fs = require('node:fs');
const path = require('node:path');

const artist = process.argv.slice(2).join(' ').trim();

if (!artist) {
  console.log('Usage: node searchSong.js <artist name>');
  process.exitCode = 1;
} else {
  try {
    const songs = JSON.parse(fs.readFileSync(path.join(__dirname, 'songs.json'), 'utf8'));
    const matchingSongs = songs.filter(
      (song) => song.artist.toLowerCase() === artist.toLowerCase()
    );

    if (matchingSongs.length === 0) {
      console.log(`No songs found for ${artist}.`);
    } else {
      matchingSongs.forEach((song) => console.log(song.title));
    }
  } catch (error) {
    console.error('Could not search songs.json:', error.message);
    process.exitCode = 1;
  }
}
