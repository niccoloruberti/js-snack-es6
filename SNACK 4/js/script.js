'use strict';

//creo l'array delle squadre di calcio
let teams = [
    {
        'nome': 'Juventus',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
    {
        'nome': 'Inter',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
    {
        'nome': 'Milan',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
    {
        'nome': 'Lazio',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
    {
        'nome': 'Roma',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
];

//scrivo la funzione per generare numeri random
function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//ciclo l'array per assegnare valori random ai punti e ai falli
teams.forEach((element) => {
    element.puntiFatti = randomNumberFromInterval(1, 100);
    element.falliSubiti = randomNumberFromInterval(1, 100);
});

console.log(teams);

//creo un nuovo array dove gli oggeti contengono solo il nome e il numero di falli subiti
const newArray = teams.map((element) => {
    let {falliSubiti} = element;
    console.log(falliSubiti);
    return  {
        'nome': element.nome,
        'falli subiti': falliSubiti
    };
});

console.log(newArray);