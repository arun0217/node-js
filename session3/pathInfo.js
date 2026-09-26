const path = require('path').posix;

const filePath = '/user/music/playlist.txt';

console.log('Directory:', path.dirname(filePath));
console.log('Base name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
