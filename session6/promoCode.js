const { createInterface } = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const allowedCodes = new Set(['ZOMATO50', 'MEAL20', 'WELCOME']);

function checkPromoCode(code) {
  if (typeof code !== 'string' || !/^[a-zA-Z0-9]+$/.test(code)) {
    return { valid: false, message: 'Enter a promo code without spaces or special characters.' };
  }

  if (!allowedCodes.has(code.toUpperCase())) {
    return { valid: false, message: 'That promo code is not available.' };
  }

  return { valid: true, message: 'Promo code applied successfully.' };
}

async function askForPromoCode() {
  const prompt = createInterface({ input: stdin, output: stdout });

  try {
    const code = await prompt.question('Enter your promo code: ');
    const result = checkPromoCode(code);
    console.log(result.message);
  } finally {
    prompt.close();
  }
}

askForPromoCode();
