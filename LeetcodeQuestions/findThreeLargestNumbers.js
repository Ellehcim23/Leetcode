function findThreeLargestNumbers(array) {
    // Write your code here.
    maxNumbers = [-Infinity, -Infinity, -Infinity] 
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num > maxNumbers[2]) {
            maxNumbers[0] = maxNumbers[1]
            maxNumbers[1] = maxNumbers[2]
            maxNumbers[2] = num
        } else if (num > maxNumbers[1]) {
            maxNumbers[0] = maxNumbers[1]
            maxNumbers[1] = num
        } else if (num > maxNumbers[0]) {
            maxNumbers[0] = num
        }
    }

    return maxNumbers
}

// array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
array2 = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]

//expected output: [18, 141, 541]
// console.log(findThreeLargestNumbers(array))
console.log(findThreeLargestNumbers(array2))