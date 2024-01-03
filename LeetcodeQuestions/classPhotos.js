redShirtHeights = [5, 8, 1, 3, 4];
blueShirtHeights = [6, 9, 2, 4, 5];

//sort the rows 
//compare the same index of both arrays 

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort();
    blueShirtHeights.sort();

    let redTaller = true;
    let blueTaller = true;

    for (let i = 0; i < redShirtHeights.length; i++) {
        if (redShirtHeights[i] <= blueShirtHeights[i]) {
            redTaller = false;
        }
        if (redShirtHeights[i] >= blueShirtHeights[i]) {
            blueTaller = false;
        }
    }

    return redTaller || blueTaller;

}

console.log(classPhotos(redShirtHeights, blueShirtHeights));