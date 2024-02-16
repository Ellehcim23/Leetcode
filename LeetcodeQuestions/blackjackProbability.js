function blackjackProbability(target, startingHand) {
    memo = {};
    return parseFloat(blackjackProbabilityHelper(target, startingHand, memo).toPrecision(3));
}

function blackjackProbabilityHelper(target, currentHand, memo) {
    if (memo[currentHand]) return memo[currentHand];
    if (currentHand> target) return 1;
    if (currentHand +4 >= target) return 0;
    
    totalProbability = 0;
    for (let i = 1; i <= 10; i++) {
        totalProbability += blackjackProbabilityHelper(target, currentHand + i, memo);
    }
    memo[currentHand] = totalProbability / 10;
    return memo[currentHand];
}
// 10 items possible. 