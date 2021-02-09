// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = [];
    for (let j = 1; j <= i; j++) {
      step.push('#');
    }
    for (let k = 1; k <= n - i; k++) {
      step.push(' ');
    }
    console.log(step.join(''));
  }
}

steps(4);
module.exports = steps;
