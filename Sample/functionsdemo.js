const ab = function myF(a, b){
    return a + b;
}
console.log(ab(12, 11));

// Function constructor:

const xa = Function("a", "b", "return a * b");
let z = xa(2, 11);
console.log(z);

// Self-invoking functions:

(function(){
    let x = "Hello";

})();

// Arrow functions:

const y = (a,b) => a * b; //1-)
console.log(y(3,8));

const c = (a, b) => { return a -b}; //2-)
console.log(c(7, 3));

// Function parameters:

function myFunc(x, y = 4){
    return x * y;
}
console.log(myFunc(9));

function func(x, y){
    return x * 9;
}
console.log(func(9));

function f(x, y) {
    y = 11;
    return x * y;
}
console.log(f(3));