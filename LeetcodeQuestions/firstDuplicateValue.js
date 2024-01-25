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