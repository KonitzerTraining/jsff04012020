// ES3
let Person = (function () {

    function Person(name) {
        this.name = name;
    }

    Person.prototype.anrufen = function () {
        console.log(this.name + ' am Aparat');
    };
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

