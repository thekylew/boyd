//validate arguments
const numbers = process.argv.slice(2);

if (numbers.length <= 1) {
  console.error("Expected more than one number. Try `npm run numbers -- 5 6 9 12 15`");

  return;
}

