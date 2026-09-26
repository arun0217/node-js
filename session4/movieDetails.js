const movies = [
  { title: 'Arrival', year: 2016, genre: 'Science fiction' },
  { title: 'The Grand Budapest Hotel', year: 2014, genre: 'Comedy' },
  { title: 'Hidden Figures', year: 2016, genre: 'Drama' }
];

function getMovieDetails(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((item) => item.title === title);
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error(`Movie "${title}" was not found.`));
      }
    }, 1000);
  });
}

async function printMoviesInSequence() {
  const titles = ['Arrival', 'The Grand Budapest Hotel', 'Hidden Figures'];

  for (const title of titles) {
    try {
      const movie = await getMovieDetails(title);
      console.log(movie);
    } catch (error) {
      console.error(error.message);
    }
  }
}

printMoviesInSequence();