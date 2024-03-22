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

const students = [
    {
        id : 213,
        Name : 'Marco della Rovere',
        Grade : 78
    },
    {
        id : 110,
        Name : 'Paola Cortellessa',
        Grade : 96
    },
    {
        id : 250,
        Name : 'Andrea Mantegna',
        Grade : 48
    },
    {
        id : 145,
        Name : 'Gaia Borromini',
        Grade : 74
    },
    {
        id : 196,
        Name : 'Luigi Grimaldello',
        Grade : 68
    },
    {
        id : 102,
        Name : 'Piero della Francesca',
        Grade : 50
    },
    {
        id : 120,
        Name : 'Francesca da Polenta',
        Grade : 84
    },
]

const plates = students.map((element)=>{    
    return element.Name.toUpperCase()
})
console.log(plates)
