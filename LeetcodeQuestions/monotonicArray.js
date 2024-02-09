function isMonotonic(array){
    let decreasing = true;
    let increasing = true;
    for(let i = 1; i < array.length; i++) {
        if(array[i] > array[i - 1]) decreasing = false;
        if(array[i] < array[i - 1]) increasing = false;
    }
    return decreasing || increasing;
}