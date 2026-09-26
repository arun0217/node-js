# Session 9: Command-Line Arguments and Arrays

Install the dependency with `npm install`, then run these examples from this directory:

- `node greet.js Arun` prints a greeting using the name from `process.argv`.
- `node addSong.js --title "Dreams" --artist "Fleetwood Mac"` adds a song to `songs.json`, unless its title is already there.
- `node searchSong.js "Fleetwood Mac"` prints titles by that artist using `Array.filter`.
- `npm run movie` looks up movie ID 2 using `Array.find`.

Song title matching is case-insensitive, so adding the same title with different capitalization will still be treated as a duplicate.
