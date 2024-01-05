array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

//assume array is sorted
// find the middle index of the array
// if the target is greater than the middle index, then we know that the target is in the right half of the array
// if the target is less than the middle index, then we know that the target is in the left half of the array

function binarySearch (array, target) {
    return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    let middle = Math.floor((left + right) / 2);
    potentialMatch = array[middle];
    if (target === potentialMatch) {
        return middle;
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1);
    } else if (target > potentialMatch) {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}




function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    potentialMatch = array[middle];
    if (target === potentialMatch) {
        return middle;
    } else if (target < potentialMatch) {
        right = middle - 1;
    } else if (target > potentialMatch) {
        left = middle + 1
    }}
    return -1
}

console.log(binarySearch(array, target));