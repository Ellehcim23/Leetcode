//Write a fucntion that takes in a string of lowercase characters and returns the 
//index of the string's first non-repeating character.

//The first non-repeating character is the first character in a string that occurs only once.
//If the input string doesn't have any non-repeating characters, your function should return -1.

string = "ababac"

// function firstNonRepeatingCharacter(string) {
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i]
//         for (let j = i + 1; j < string.length; j++) {
//             let nextChar = string[j]
//             if (char === nextChar) {
//                 break;
//             } else if (j === string.length - 1) {
//                 return i
//             }
//         }
//     }
//     return -1
// }

function firstNonRepeatingCharacter(string){
    const hash = {};
    for (let char of string)
        hash[char] = (hash[char] || 0) + 1;
    for (let i = 0; i < string.length; i++)
        if (hash[string[i]] === 1) return i;

    return -1;
}

console.log(firstNonRepeatingCharacter(string))