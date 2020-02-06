//ES6
// Map ist wie ein Objekt, aber
// kann als Schlüssel alles enthalten
let map = new Map();
map.
console.log(Map.prototype);

// map.set(key,value);
map.set({id: 3, title: 'Haus'}, 2);
map.set({id: 4, title: 'Baum'}, 1);
map.set({id: 5, title: 'Moped'}, 7);
console.log(map);

for (let [key, value] of map.entries()) {
    console.log(key, value);
}


for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

map.forEach((item, key) => {
    console.log(key, item);
});

let iterable = map.entries();

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());