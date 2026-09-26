const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, 'books.txt');

fs.readFile(booksPath, 'utf8', (error, data) => {
  if (error) {
    console.error('Could not read the book list:', error);
    return;
  }

  process.stdout.write(data);
});
