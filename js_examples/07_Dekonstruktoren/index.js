// Object literal notation
let list = [
    3, 'Überschrift', 'jemand'
];

// ES6 array deconstructor
let [id, title, author, isbn = null] = list;
console.log(id, title, author, isbn);

let address = {
    street: {
        street: 'asdf',
        building: '394a'
    },
    plz: '09899',
    city: 'Berlin'
};

// ES6 object deconstructor
let {street, plz: zip, city, note = 'x' } = address;
console.log(street, zip, city, note);

function checkZip({plz: zip = null}){
    console.log(zip);
}

checkZip(address);


