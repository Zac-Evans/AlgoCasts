// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

//My solution
function pyramid(n) {
  const width = n + n - 1;

  for (i = 0; i < n; i++) {
    let row = [];
    for (k = 0; k < i + i + 1; k++) {
      row.push('#');
    }
    for (j = 0; j < (width - i - i - 1) / 2; j++) {
      row.unshift(' ');
      row.push(' ');
    }

    console.log(row.join(''));
  }
}

pyramid(4);
module.exports = pyramid;
