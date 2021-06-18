var players = [
    {
        player: 'James Rodriguez',
        team: 'Real Madrid',
        yearsOld: 26
    },
    {
        player: 'Harry Kane',
        team: 'Tottenham',
        yearsOld: 28
    },
    {
        player: "Romelu Lukaku",
        team: 'Internazional',
        yearsOld: 27
    },
    {
        player: "Neymar",
        team: 'PSG',
        yearsOld: 26
    },
];
var playersFilters = players.filter(function (player) { return player.yearsOld >= 27; });
var playerSort = playersFilters.sort(function (a, b) { return a.yearsOld - b.yearsOld; });
console.log(playerSort);
var playersString = JSON.stringify(players);
var changeScreen = localStorage.setItem("players", playersString);
window.location.href = "secondpage.html";
