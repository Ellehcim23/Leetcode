// sample input
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// sample output
// [-1, 11]

function twoNumberSum(array, targetSum) {
    // Write your code here.
    let target = []
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i]
        for (let j = i + 1; j < array.length; j++) {
            let secondNum = array[j]
            if (firstNum + secondNum === targetSum) {
                target.push(firstNum, secondNum)
            }
        }
    }
    return target

}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

