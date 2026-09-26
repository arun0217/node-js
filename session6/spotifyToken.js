const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

function useSpotifyToken(token) {
  if (!token) {
    throw new Error('Spotify token is not set. Add it to the local .env file.');
  }

  // This stands in for an API request. The token value stays out of the logs.
  console.log('Dummy Spotify API call made with the environment token (hidden).');
}

try {
  useSpotifyToken(process.env.SPOTIFY_API_TOKEN);
} catch (error) {
  console.error(error.message);
}
