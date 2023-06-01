'use strict';

//scrivo l'array con i nomi degli invitati
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
console.log(guests);

//creo un nuovo array con le informazioni aggiuntive
const objGuests = guests.map((item, index) => {
    console.log(item);
    console.log(index)
    let obj = {
        name: item,
        tavolo: 'Tavolo Vip',
        posto: index + 1,
    };
    return obj
});
console.log(objGuests);