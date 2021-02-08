// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//My solution
function chunk(array, size) {
  let outerArray = [];
  let innerArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      innerArray.push(array[i]);
    } else if (i % size !== 0) {
      innerArray.push(array[i]);
    } else if (i % size === 0) {
      outerArray.push(innerArray);
      innerArray = [];
      innerArray.push(array[i]);
    } else {
      innerArray.push(array[i]);
    }
  }
  outerArray.push(innerArray);

  return outerArray;
}

chunk([1, 2, 3, 4], 2);
module.exports = chunk;
