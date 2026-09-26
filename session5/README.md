# Session 5: Error Handling

Run an example from this directory with `node <file-name>.js`.

- `getUserById.js` validates an ID and throws an `Error` for invalid input.
- `songLyrics.js` catches and reports a simulated lyrics API failure.
- `orderStatus.js` uses a delayed Promise and catches a missing order ID with `async`/`await`.
- `movieDetails.js` awaits the async call so its rejection is caught by `try`/`catch`.
- `productDetails.js` catches both a synchronous input error and an asynchronous API rejection, returning a friendly message for either failure.
