const nbr = [45, 4, 9, 16, 25];

let txt3 = "";
nbr.forEach(myFunction);

function myFunction(value) {
  txt3 += value + ", ";
}
console.log(txt3)

// ***************************

const arr2 = [23,43,55];
let txt4 = "";

arr2.forEach(element => {
  txt4 += element + ", "
  
});
console.log(txt4);
