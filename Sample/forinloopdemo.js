const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

// ******************************

const employee = {name: "Marry", lastName: "Black", age: 33};

let text2 = "";
for (const y in employee) {
   text2 = text2 + employee[y] + " ";
}
console.log(text2);

// ******************************

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + " ";
}
console.log(txt);

// ******************************

const arr = [1,21,33,43];

let num = "";
for(let z in arr){
    num = num + arr[z] + " ";
}
console.log(num);

// *****************************

