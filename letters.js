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

//make a map with a key for each unique character in the string
const charMap = new Map();

for (const char of givenString) charMap.set(char, []);

//iterate through each key and generate permutations
for (const key of charMap.keys()) {
  const otherKeys = Array.from(charMap.keys()).filter(
    (otherKey) => otherKey !== key
  );

  charMap.set(key, generatePermutations(key, otherKeys));
}

//merge the values from the map into the final array
let result = [];

for(const key of charMap.keys()) {
    result = result.concat(charMap.get(key));
}

//log the result
result.forEach(permutation => console.log(permutation));
