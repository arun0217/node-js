const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');
const validator = require('validator');

async function checkEmail() {
  const prompt = readline.createInterface({ input: stdin, output: stdout });

  try {
    const email = await prompt.question('Enter your email: ');
    console.log(validator.isEmail(email) ? 'Valid Email' : 'Invalid Email');
  } finally {
    prompt.close();
  }
}

checkEmail();
