// ES3
// alle Properties und Methods sind immer public
let Person = (function () {

    function Person(name) {
        // Properties
        this.name = name;

        // True Private
        var id = Math.floor(Math.random() * 1e8);
        this.getid = function () {
            return id;
        };
    }

    // Methods
    Person.prototype.anrufen = function () {
        console.log(this.name + ' am Aparat');
    };

    // Static Method
    Person.isPerson = function () {
    }

    return Person;

}());

// new Function();
console.dir(Function.prototype);
console.dir(Person);
/*
new erstellt Kontext
Person erweitert Kontext
new gibt Referenz zurück
 */
let p = new Person('Hans');

console.log(p);

for (let key in p) {
    console.log(key);
}
p.anrufen();

