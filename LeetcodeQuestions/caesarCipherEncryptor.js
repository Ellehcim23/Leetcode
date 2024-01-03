let string = "xyz";
let key = 2;


function caesarCipherEncryptor(string, key) {
    let newLetters = [];
    for (let i = 0; i < string.length; i++) {
        let characCode = (string.charCodeAt(i) - 97 + key) % 26; //97 is the charCode for "a"
        newLetters.push(String.fromCharCode(characCode + 97));
    }
    return newLetters.join("");
}

console.log(caesarCipherEncryptor(string, key))