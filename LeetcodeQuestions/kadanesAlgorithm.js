// O(n) time | O(1) space
// constantly checking the maxEndingHere and updating it to the maxSoFar.
function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for(let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}