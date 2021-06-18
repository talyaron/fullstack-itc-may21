var teams = ['Velez', 'Godoy Cruz', 'Boca', 'River', 'Gimnasia', 'San Lorenzo'];
console.log("Sort of teams", teams.sort());
console.log("El mas grande", teams.filter(function (team) { return (team === 'Velez'); }));
var newTeams = teams.map(function (team) { return ("<p> El equipo Argentino es " + team + "</p>"); }).join(' ');
console.log(newTeams);
var raiz = document.querySelector('#root');
raiz.innerHTML = newTeams;
