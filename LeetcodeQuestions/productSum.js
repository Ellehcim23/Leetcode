// O(n) time | O(d) space 
// n defined as each element in the array including subarrays
// d defined as the depth of the subarrays
function productSum(array, depth = 1) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            sum += productSum(array[i], depth + 1);
        }
        else {
            sum += array[i];
        }
    }
    return sum * depth;
}

