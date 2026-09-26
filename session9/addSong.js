const fs = require('node:fs');
const path = require('node:path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { title, artist } = yargs(hideBin(process.argv))
  .option('title', {
    type: 'string',
    describe: 'Song title',
    demandOption: true
  })
  .option('artist', {
    type: 'string',
    describe: 'Artist name',
    demandOption: true
  })
  .help()
  .strict()
  .parse();

const songsPath = path.join(__dirname, 'songs.json');
const normalizedTitle = title.trim();
const normalizedArtist = artist.trim();

if (!normalizedTitle || !normalizedArtist) {
  console.error('Both title and artist must contain text.');
  process.exitCode = 1;
} else {
  try {
    const songs = JSON.parse(fs.readFileSync(songsPath, 'utf8'));

    if (!Array.isArray(songs)) {
      throw new Error('songs.json must contain an array.');
    }

    const existingSong = songs.find(
      (song) => song.title.toLowerCase() === normalizedTitle.toLowerCase()
    );

    if (existingSong) {
      console.log('Song already exists');
    } else {
      songs.push({ title: normalizedTitle, artist: normalizedArtist });
      fs.writeFileSync(songsPath, `${JSON.stringify(songs, null, 2)}\n`);
      console.log('Song added successfully');
    }
  } catch (error) {
    console.error('Could not update songs.json:', error.message);
    process.exitCode = 1;
  }
}
