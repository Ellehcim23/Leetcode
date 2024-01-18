function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    let left = 0;
    let right = left + 2;
    let middle = left + 1;
    let target = [] ;

    
    currentSum = array[left] + array[right] + array[middle];
    if (targetSum === currentSum) {
        return target.push(array[left], array[right], array[middle]);
    } else if (targetSum < currentSum) {
        right = right + 1;
        left = left + 1;
        middle = middle + 1;
    } else if (targetSum > currentSum) {
        left = left - 1
        right = right - 1
        middle = middle - 1
    }
    
    return []
}

array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
console.log(threeNumberSum(array, targetSum));


