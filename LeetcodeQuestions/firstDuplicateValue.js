function firstDuplicateValue(array) {
  // Write your code here.
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]]) {
      return array[i];
    } else {
      hash[array[i]] = true;
    }
  }
  return -1;
}

// set up a hash to keep track of the values. 
// iterate through the array
// if the valuea at the current index is in the hash, return the value else add it to the hash. 
// O(n) time | O(n) space


function firstDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        let absValue = Math.abs(array[i]);
        if (array[absValue - 1] < 0) return absValue;
        array[absValue - 1] *= -1;
    }
}