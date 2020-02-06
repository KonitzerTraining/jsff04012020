// Object literal notation
const record = [
    3, 'Überschrift', 'jemand'
]; // Beispiel für einen Datensatz

// ES6 array deconstructor
const [id, title, author, isbn = null] = record;
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
// zip ist die neue Variable, eine Alias für plz.
// note bekommt einen default-Wert 'x'
let {street, plz: zip, city, note = 'x'} = address;
console.log(street, zip, city, note);

// Herauszhiehen einer einzelnen Eigenschaft aus dem übergebenen Objekt
function checkZip({plz: zip = null}){
    console.log(zip);
}

checkZip(address);


