function isValidSubsequence(array, sequence) {
  // Write your code here.

let index = 0;
for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num === sequence[index]) {
        index++;
    }
}

return index === sequence.length;
}

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

console.log(isValidSubsequence(array, sequence))