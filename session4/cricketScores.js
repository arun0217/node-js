const matches = [
  { id: 101, teams: 'India vs Australia', score: 'India 182/4 (18.2 overs)' },
  { id: 102, teams: 'England vs Pakistan', score: 'England 156/7 (20 overs)' },
  { id: 103, teams: 'New Zealand vs South Africa', score: 'New Zealand 211/6 (20 overs)' }
];

function fetchMatchScore(matchId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const match = matches.find((item) => item.id === matchId);
      if (!match) {
        reject(new Error(`No match found with ID ${matchId}.`));
        return;
      }

      resolve(match);
    }, 1000);
  });
}

async function showMatchScore(matchId) {
  try {
    const match = await fetchMatchScore(matchId);
    console.log(`${match.teams}: ${match.score}`);
  } catch (error) {
    console.error('Could not fetch the match score:', error.message);
  }
}

showMatchScore(101);
showMatchScore(999);