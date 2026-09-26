const playlists = [
  { name: 'Road Trip', songs: ['Life Is a Highway', 'Send Me on My Way'] },
  { name: 'Study Mix', songs: ['Weightless', 'Holocene'] }
];

function getPlaylist(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const playlist = playlists.find((item) => item.name === name);
      if (playlist) {
        resolve(playlist);
      } else {
        reject(new Error(`Playlist "${name}" was not found.`));
      }
    }, 1000);
  });
}

function addSong(playlist, song) {
  return new Promise((resolve) => {
    setTimeout(() => {
      playlist.songs.push(song);
      resolve(playlist);
    }, 1000);
  });
}

async function updatePlaylist(playlistName, song) {
  try {
    const playlist = await getPlaylist(playlistName);
    const updatedPlaylist = await addSong(playlist, song);
    console.log('Updated playlist:', updatedPlaylist);
  } catch (error) {
    console.error('Could not update the playlist:', error.message);
  }
}

updatePlaylist('Road Trip', 'On the Road Again');