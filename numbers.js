//validate arguments
const inputArray = process.argv.slice(2);

if (inputArray.length <= 1) {
  console.error(
    "Expected more than one number. Try `npm run numbers -- 5 6 9 12 15`"
  );

  return;
}

const numbers = inputArray.map(Number);

const arrayIsAllNumbers = !numbers.some(isNaN);

if (!arrayIsAllNumbers) {
  console.error("Expected only numbers.");

  return;
}

console.log("Given numbers", numbers);

//Do the multiplication transformation
const result = numbers.map((n, i, a) => {
  //Get an array of all numbers except the one at index i
  const otherNumbers = [...a.slice(0, i), ...a.slice(i + 1)];

  //Multiply the numbers in the resulting array together
  return otherNumbers.reduce((iterator, nextNum) => iterator * nextNum, 1);
});

console.log("Resulting array", result);
