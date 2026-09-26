# Session 4: Callbacks, Promises, and Async/Await

Run each example from this directory with `node <file-name>.js`.

- `userProfile.js` looks up a profile and calls back after two seconds.
- `foodOrder.js` chains restaurant, food, and order steps with Promises.
- `playlistAsync.js` awaits playlist lookup and song addition, each delayed by one second.
- `movieDetails.js` fetches and prints three movie records in sequence.
- `cricketScores.js` fetches mock scores and handles both a valid match ID and a missing one.

## Cricket score prompt

**Prompt:** Write a Node.js function that fetches cricket match scores from a mock API using Promises. Include error handling for a match that is not found, and show how to call the function.

**AI response:** A Promise can simulate an API request with `setTimeout`. Look up the requested match when the timer finishes, resolve with the score if it exists, and reject with an `Error` if it does not. Handle the rejected Promise with `try`/`catch` in an async function. The runnable example is in `cricketScores.js`; it prints one successful result and one not-found error.

```js
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
```

The mock data is stored in an array instead of making a real network request. Both successful and missing-match cases are handled.