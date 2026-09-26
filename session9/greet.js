const name = process.argv.slice(2).join(' ').trim();

if (!name) {
  console.log('Usage: node greet.js <name>');
} else {
  console.log(`Hello, ${name}!`);
}
