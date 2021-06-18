const teams: Array<string> = ['Velez', 'Godoy Cruz', 'Boca', 'River', 'Gimnasia', 'San Lorenzo'];

console.log("Sort of teams", teams.sort()); 

console.log("El mas grande",teams.filter(team => (team === 'Velez')));

const newTeams = teams.map(team => (`<p> El equipo Argentino es ${team}</p>`)).join(' ');
console.log(newTeams);

const raiz = document.querySelector('#root');
raiz.innerHTML = newTeams;