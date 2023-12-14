//validate arguments
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error(
    "Wrong number of arguments given. I want one string. Try `npm run -- healthcare`"
  );

  return;
}

//function to generate 3-letter permutations given a starting character and the other characters
function generatePermutations(character, otherCharacters) {
    const permutations = [];
  
    for (const char1 of otherCharacters) {
      for (const char2 of otherCharacters) {
        if (char1 !== char2) {
          const permutation = character + char1 + char2;
          permutations.push(permutation);
        }
      }
    }
  
    return permutations;
  }

//get the string from the args array
const givenString = args[0];

console.log(`Given string:`, givenString);

if (givenString.length < 3) {
    console.error('String is too short. It needs at least 3 characters.');
    return;
}

const uniqueCharacters = [];

//make an array with the unique characters
for (const char of givenString) {
  if (!uniqueCharacters.includes(char)) uniqueCharacters.push(char);
}

console.log(`Unique characters:`, uniqueCharacters);

let result = [];

//iterate through each key and generate permutations
uniqueCharacters.forEach(char => {
  const otherCharacters = uniqueCharacters.filter(otherChar => otherChar !== char);

  result = result.concat(generatePermutations(char, otherCharacters));
});

//log the result
result.forEach(permutation => console.log(permutation));
