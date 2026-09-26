const os = require('node:os');
const path = require('node:path');

console.log('Operating system platform:', os.platform());
console.log('Current file directory:', path.dirname(__filename));
