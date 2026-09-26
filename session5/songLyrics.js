function fetchSongLyrics(songName) {
  // Simulate a lyrics API that is temporarily unavailable.
  throw new Error(`Lyrics are unavailable for "${songName}" right now.`);
}

try {
  const lyrics = fetchSongLyrics('Dreams');
  console.log(lyrics);
} catch (error) {
  console.error('Could not fetch the song lyrics:', error.message);
}
