// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// CLEAN AND CLEVER SOLUTION
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

function anagrams(stringA, stringB) {
  const toObject = (string) => {
    string = string.replace(/[^a-zA-Z0-9]/g, '');

    let chars = {};

    for (let char of string) {
      char = char.toLowerCase();
      !chars[char] ? (chars[char] = 1) : chars[char]++;
    }
    return chars;
  };

  const objA = toObject(stringA);
  const objB = toObject(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let char in objA) {
    if (objA[char] !== objB[char]) {
      return false;
    }
  }

  return true;
}

anagrams('rail safety!', 'fairy tales');
module.exports = anagrams;
