// Snack 1

const vipTable = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

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

