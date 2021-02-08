// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution #1 - Obvious and easy, might be cheating

function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution #2 - Iterate through array and add each letter to the BEGINNING of an empty string

// function reverse(str) {
//   let reversed = '';

//   //ES2015 for loop syntax
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

//Solution #3 - Use a reducer function to iterate

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
