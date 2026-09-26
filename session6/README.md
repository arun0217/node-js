# Session 6: Environment Variables and Input Validation

Install the project dependency with `npm install`, then run an example with `npm run env`, `npm run signup`, `npm run promo`, or `npm run spotify`.

- `.env` holds local demo values for the API key, database password, and Spotify token. Replace them with your own local values when needed. `.gitignore` excludes `.env` and `node_modules/`.
- `.env.example` lists the variable names with replacement placeholders for setting up another copy of the project.
- `environmentVariables.js` loads the API key and database password with `dotenv` and prints masked values.
- `signupServer.js` starts a built-in Node HTTP server. The `POST /signup` endpoint checks the username and email before keeping the signup in memory.
- `promoCode.js` asks for a code and accepts only alphanumeric codes from its allowed list.
- `spotifyToken.js` reads the Spotify token from `.env` and simulates using it without printing its value or making a network request.

## Security improvement

A suggested improvement was to keep credentials out of version control and avoid printing them. The local `.env` file is excluded by `.gitignore`, `.env.example` contains placeholders instead of credentials, and the examples print masked values or a status message.
