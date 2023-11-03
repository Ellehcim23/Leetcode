function tournamentWinner(competitions, results) {
    // return name of winning team
    let leader = { score: 0 , name: ''};
    let scores = {}
    for (let i = 0; i < competitions.length; i++) {
        if (results[i] === 1) {
            winningTeam = competitions[i][0]
        }
        else if (results[i] === 0) {
            winningTeam = competitions[i][1]
        }
         
        if (winningTeam in scores) scores[winningTeam] += 3;
        else scores[winningTeam] = 3;

        if (leader.score < scores[winningTeam]) {
            leader.name = winningTeam;
            leader.score = scores[winningTeam];
        }
    }
    return leader.name
}

competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
results = [0, 0, 1];

console.log(tournamentWinner(competitions, results))