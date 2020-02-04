//ES6
let map = new Map();

console.log(Map.prototype);
map.set({id: 3, title: 'Haus'}, 2);
console.log(map);

for(let [key, value] of map.entries()) {
    console.log(key, value);
}

for(let key of map.keys()) {
    console.log(key);
}

for(let value of map.values()) {
    console.log(value);
}

map.forEach((item) => {
    console.log(item);
});