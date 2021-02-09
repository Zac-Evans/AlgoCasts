// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//My solution

function capitalize(str) {
  let string = str.split('');
  let capArray = [];

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      capArray.push(string[i].toUpperCase());
    } else if (string[i] === ' ') {
      capArray.push(string[i]) && capArray.push(string[i + 1].toUpperCase());
      i++;
    } else {
      capArray.push(string[i]);
    }
  }

  return capArray.join('');
}

//Cleaner solution
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

capitalize('a short sentence');
module.exports = capitalize;
