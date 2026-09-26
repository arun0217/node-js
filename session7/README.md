# Session 7: Getting Started with Node.js

Run each example from this directory with `node <file-name>.js`.

- `helloV8.js` logs the result of adding 5 and 7. Node.js runs the JavaScript through the V8 engine.
- `timeNow.js` uses Node's built-in `os` and `path` modules to show the platform and this file's directory.
- `playlist.js` exports five song names, and `app.js` imports and displays them.
- `colorLogger.js` uses Chalk to print a green welcome message. Install its dependency with `npm install`.

Node.js was already installed on the system (`node -v` reported `v24.21.0`). `nodemon` can run the playlist example with `npm run dev`; it restarts the script when `app.js` changes.
