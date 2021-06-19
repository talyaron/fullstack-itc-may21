interface FootballPlayer {
    player: string;
    team: string;
    yearsOld: number
}

let players: Array<FootballPlayer> = [
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
]


let playersFilters = players.filter(player => player.yearsOld >= 27);
let playerSort = playersFilters.sort((a,b)=> a.yearsOld - b.yearsOld);
console.log(playerSort);

let playersString = JSON.stringify(players);

let changeScreen =  localStorage.setItem(`players`, playersString);
window.location.href = `secondpage.html`;