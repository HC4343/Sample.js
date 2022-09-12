const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + '=' + value + ", "
  })
  
console.log(text);

// Map Entries Method:

const cars = new Map([
    ["Toyota", "Prius"],
    ["Mercedes", "C200"],
    ["Fiat", ["Tipo"]]
]);

let txt = "";
for (const a of cars.entries()) {
    txt += a + "/";
    
}
console.log(txt);

let t = "";  // Return values
for (const z of cars.values()) {
    t += z + " ";
    
}
console.log(t);

let s = "";
for (const q of cars.keys()) {
    s += q + " ";
    
}
console.log(s);


