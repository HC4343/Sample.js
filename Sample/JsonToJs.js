// EXAMPLE ONE:

let text = '{"employees" : [' + 
' {"name": "John", "lastname": "White"}, ' + 
' {"name": "Adem", "lastname": "Black"}, {"age": 31}]}';

let obj = JSON.parse(text);

let a = obj.employees[0].name;
let b = obj.employees[0].lastname;
console.log(a + " " + b);

// EXAMPLE TWO:

let text2 = '{"students" : [{"id": 3534, "class": "A"}, {"id": 6768, "class": "B"}]}';

let obj2 = JSON.parse(text2);

let c = obj2.students[1].class;
console.log(c);

// EXAMPLE THREE:

let text3 = '{"cars": [{"type": "Toyota", "model": "Prius"}, {"type": "Mercedes", "model": "C200"}]}';

let obj3 = JSON.parse(text3);

let d = obj3.cars[0].type;
let e = obj3.cars[0].model;
console.log(d + ": " + e);

let ar = [[1,2,3], [23,24]];
console.log(ar[0][2]);