// O(n) time | O(1) space

function hasSingleCycle(array){
    let visited = 0 
    let currentIdx = 0
    while (visited < array.length) {
       if (visited > 0 && currentIdx === 0) return false
       visited+= 1
        currentIdx = getNextIdx(currentIdx, array)
    }
    return currentIdx === 0
}

function getNextIdx(currentIdx, array) {
    const jump = array[currentIdx]
    const nextIdx = (currentIdx + jump) % array.length // allows for wrapping around the array
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}