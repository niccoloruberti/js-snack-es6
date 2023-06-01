'use strict';

const students = [
    {'id': '213',
    'name': 'Marco della Rovere',
    'grades': '78'},
    {'id': '110',
    'name': 'Paola Cortellessa',
    'grades': '96'},
    {'id': '250',
    'name': 'Andrea Mantegna',
    'grades': '48'},
    {'id': '145',
    'name': 'Gaia Borromini',
    'grades': '74'},
    {'id': '196',
    'name': 'Luigi Grimaldello',
    'grades': '68'},
    {'id': '102',
    'name': 'Piero della Francesca',
    'grades': '50'},
    {'id': '120',
    'name': 'Francesca da Polenta',
    'grades': '84'},
];

//creo un nuovo array con i nomi degli studenti in maiuscolo
const upperCaseStudents = students.map((item) => {
    return item.name.toUpperCase();
});

console.log(upperCaseStudents);

//creo un nuovo array con gli studenti che hanno un valore del totale dei voti superiore a 70
const over70Students = students.filter((item) => {
    if(item.grades > 70) {
        return true;
    };
});
console.log(over70Students);

//creo un nuovo array con gli studenti che hanno un valore totale dei voti compreso tra 70 e 120 (estremi esclusi)
const over70Under120Students = students.filter((item) => {
    if(item.grades > 70 && item.grades < 120) {
        return true;
    };
});
console.log(over70Under120Students)