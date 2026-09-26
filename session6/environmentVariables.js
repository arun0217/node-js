const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

function maskSecret(value) {
  return value ? '[hidden]' : '[not set]';
}

console.log('API_KEY:', maskSecret(process.env.API_KEY));
console.log('DB_PASSWORD:', maskSecret(process.env.DB_PASSWORD));
