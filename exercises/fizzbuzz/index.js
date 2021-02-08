// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//My solution... was right!
function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log('fizzbuzz')
      : i % 5 === 0
      ? console.log('buzz')
      : i % 3 === 0
      ? console.log('fizz')
      : console.log(i);
  }
}

fizzBuzz(15);

module.exports = fizzBuzz;
