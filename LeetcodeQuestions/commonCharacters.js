// iterate through the array of strings
// for each string, iterate through the string


function commonCharacters(strings) {
    
    let result = [];
    let stringSet = new Set(strings[0]);
    for (let i = 1; i < strings.length; i++) {
        const compareSet = new Set(strings[i]);
        for(let key of stringSet) {
            if (!compareSet.has(key)) {
                stringSet.delete(key);
            }
        }
    }
    return Array.from(stringSet);
   
}