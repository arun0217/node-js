async function fetchMovieDetails() {
  throw new Error('Movie not found');
}

async function showMovieDetails() {
  try {
    await fetchMovieDetails();
  } catch (error) {
    console.error(error.message);
  }
}

showMovieDetails();
