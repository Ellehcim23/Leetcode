function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    let ways = new Array(n+1).fill(0);
  
    ways[0] = 1;
  
    for (let i = 0; i < denoms.length; i++) {
      for (let current = 1; current <= n; current++) {
        if (denoms[i] <= current) {
          ways[current] += ways[current - denoms[i]]
        }
      }
    }
    return ways[n]
  }