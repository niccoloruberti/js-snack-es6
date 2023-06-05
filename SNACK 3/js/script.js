'use strict';

//creo l'array con le bici
const bikes = [
    {
        'name': 'trek',
        'weight': 7
    },
    {
        'name': 'specialized',
        'weight': 4
    },
    {
        'name': 'cube',
        'weight': 9
    },
    {
        'name': 'cannondale',
        'weight': 5
    },
    {
        'name': 'coppi',
        'weight': 8
    },
    {
        'name': 'commencal',
        'weight': 6
    },    
]
console.log(bikes);

//creo una variabile che conterrà il peso minore, assegnando come valore di partenza quello della prima bici
let minWeight = bikes[0].weight;
console.log(minWeight);
//creo una variabile con il nome della bici in esame
let name;

//ciclo l'array per verificare quale bici è la più leggera
bikes.forEach((element) => {
    console.log(element)
    //creo una variabile con il peso della bici in esame
    let {weight} = element;
    if (weight < minWeight) {
        minWeight = weight;
        //assegno alla variabile name il nome della bici più leggera
        name = element.name;
    }
});

console.log(`la bici più leggera è la ${name} e pesa ${minWeight}Kg`);