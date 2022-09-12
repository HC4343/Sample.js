const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);
// ****************************

let language = "JavaScript";

let text1 = "";
for (let x of language) {
text1 += x + " ";
}
console.log(text1);

// ***************************

const myArr = ["Nell", "Sofia", "Liz"];

let names = "";
for (const n of myArr) {
    names += n + " ";
    
}
console.log(names);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + " ";
}
console.log(txt);