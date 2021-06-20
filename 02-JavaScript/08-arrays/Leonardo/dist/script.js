var teams = ['Velez', 'Godoy Cruz', 'Boca', 'River', 'Gimnasia', 'San Lorenzo'];
console.log("El mas grande", teams.filter(function (team) { return (team === 'Velez'); }));
teams.push('San Martin', 'Guaymallen');
console.log("Sort of teams", teams.sort());
var newTeams = teams.map(function (team) { return ("<p> El equipo Argentino es " + team + "</p>"); }).join(' ');
console.log(newTeams);
var raiz = document.querySelector('#root');
raiz.innerHTML = newTeams;
