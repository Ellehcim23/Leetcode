array = [1, 2, 3, 2, 2, 1, 2]

// O(n) time | O(1) space
function majorityElement(array) {
    answer = null;
    count = 0

    for(let i = 0; i < array.length; i++) {
        if (count === 0) {
            answer = array[i];
        }
        if (array[i] === answer) {
            count++;
        }
        else {
            count--;
        }
    }
    return answer;
}
