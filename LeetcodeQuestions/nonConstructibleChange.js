function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b)
    let currentChangeCreated = 0;
    for (let coin of coins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

// O(nlogn) time | O(1) space due to sorting in place
// v > c + 1 => return c + 1
// v =< c + 1 => return c + v