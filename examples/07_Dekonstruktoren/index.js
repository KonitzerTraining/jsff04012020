// Object literal notation
let list = [
    3, 'Überschrift', 'jemand'
];

let [id, title, author, isbn = null] = list;
console.log(id, title, author, isbn);

let address = {
    street: 'Im zeil 34',
    plz: '09899',
    city: 'Berlin'
};

let {street, plz: zip, city, note = 'x' } = address;
console.log(street, zip, city, note);
