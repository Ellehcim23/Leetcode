array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
function moveElementToEnd(array, toMove) {
    let i = 0;
    let j = array.length - 1;
    while(i < j) {
        while(i < j && array[j] === toMove) j--;
        if(array[i] === toMove){
            [array[i], array[j]] = [array[j], array[i]];
        } 
        i++;
    }
    return array;
}
// O(n) time | O(1) space
// note the pointers refer to the index not the value.