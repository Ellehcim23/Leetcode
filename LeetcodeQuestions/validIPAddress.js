function validIPAddresses(string) {
    // Write your code here.
    ipsFound = []
    for (let i = 1; i < Math.min(string.length, 4); i++) {
        const currentIPAddressesParts = ['', '', '', ''];
        currentIPAddressesParts[0] = string.slice(0, i);
        if (!isValidPart(currentIPAddressesParts[0])) continue;
        for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
            currentIPAddressesParts[1] = string.slice(i, j);
            if (!isValidPart(currentIPAddressesParts[1])) continue;
            for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
                currentIPAddressesParts[2] = string.slice(j, k);
                currentIPAddressesParts[3] = string.slice(k);
                if (isValidPart(currentIPAddressesParts[2]) && isValidPart(currentIPAddressesParts[3])) {
                    ipsFound.push(currentIPAddressesParts.join('.'));
                }
            }
        }
    }
    return ipsFound;
}

function isValidPart(string) {
    const stringAsInt = parseInt(string);
    if (stringAsInt > 255) {
        return false 
    }
    return string.length === stringAsInt.toString().length; // check for leading 0s
}