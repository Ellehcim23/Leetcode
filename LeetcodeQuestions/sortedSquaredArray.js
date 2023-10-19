// function sortedSquaredArray(array) {
//     // Write your code here.
//     // 0(nlogn) time | 0(n) space
//     return array.map(num => num * num).sort((a, b) => a - b)
// }

function sortedSquaredArray(array) {
    // Write your code here.
    squaredArray = []
    leftIdx = 0
    rightIdx = array.length - 1

    for (let i = array.length - 1; i >=0; i--) {
        leftVal = array[leftIdx]
        rightVal = array[rightIdx]

        if (Math.abs(leftVal) > Math.abs(rightVal)) {
            squaredArray[i] = leftVal * leftVal
            leftIdx++
        } else {
            squaredArray[i] = rightVal * rightVal
            rightIdx--
        }
    }
    return squaredArray
}

array = [1, 2, 3, 5, 6, 8, 9]
array2 = [-7, -5, -4, 3, 6, 8, 9]
console.log(sortedSquaredArray(array2))