// Snack 1

/*const vipTable = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

vipTable.forEach((element, index, array) => {
    // console.log(element, index, array)
    // console.log(element)
    let placeholder = {
        tablename : 'Vip Table',
        guestName : element,
        place : index,
    };
    let invitation = [];
    invitation.push(placeholder)
    console.log(invitation);
});
*/
// Snack 2

// const students = [
//     {
//         id : 213,
//         Name : 'Marco della Rovere',
//         Grade : 78
//     },
//     {
//         id : 110,
//         Name : 'Paola Cortellessa',
//         Grade : 96
//     },
//     {
//         id : 250,
//         Name : 'Andrea Mantegna',
//         Grade : 48
//     },
//     {
//         id : 145,
//         Name : 'Gaia Borromini',
//         Grade : 74
//     },
//     {
//         id : 196,
//         Name : 'Luigi Grimaldello',
//         Grade : 68
//     },
//     {
//         id : 102,
//         Name : 'Piero della Francesca',
//         Grade : 50
//     },
//     {
//         id : 120,
//         Name : 'Francesca da Polenta',
//         Grade : 84
//     },
// ]

// const plates = students.map((element)=>{    
//     return element.Name.toUpperCase()
// })
// console.log(plates)

// const best = students.filter((element)=>{
//     if(element.Grade >= 70)
//     return element
// }) 
// console.log(best)

// const bestId = students.filter((element)=>{
//     if(element.Grade >= 70 && element.id >= 120)
//     return element
// }) 
// console.log(bestId)



// Snack 3

/*
Canyon Ultimate CF Slx 9.0, 6,7 Kg
Rose X-Lite Six Disc, 6.9 Kg
Sarto asola, 5,7 Kg
Wilier Triestina Zero.6, 6,1

*/

/* const bikes = [
    {
        model : 'Canyon Ultimate CF',
        weight : 6700,
    },
    {
        model : 'Rose X-Lite Six',
        weight : 6900,
    },
    {
        model : 'Sarto asola',
        weight : 5700,
    },
    {
        model : 'Wilier Triestina',
        weight : 6100,
    },
];
console.log(bikes);

const bikesClone = [...bikes]
console.log(bikesClone);
  
const initialValue = 0;

const lightest = bikesClone.reduce(
  (accumulator, currentValue) => accumulator.weight > currentValue.weight ? currentValue : accumulator,
  bikesClone[0],
);

console.log(`La bici piu\' leggera è la ${lightest.model} che pesa ${lightest.weight} grammi`);
 
*/

/* Snack 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let serieA = [
    {
        team : 'Juventus',
        pts : 0,
        fouls : 0,
    },
    {
        team : 'Roma',
        pts : 0,
        fouls : 0,
    },
    {
        team : 'Inter',
        pts : 0,
        fouls : 0,
    },
    {
        team : 'Milan',
        pts : 0,
        fouls : 0,
    },
    {
        team : 'Napoli',
        pts : 0,
        fouls : 0,
    },
    {
        team : 'Atalanta',
        pts : 0,
        fouls : 0,
    },
]

const serieAclone = [...serieA]
console.log(serieAclone);
