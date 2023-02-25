// ES6 , ECMAScript 6, ECMASCript 2015
//--------------------------------------
// var and let and const

// var - If Scope, for Scope

// Global Scope
// Local Scope
// Function Scope
// Block Scope

var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope`, a, b, c);

function test(){
    var a = 10;
    let b = 11;
    const c = 12;
    console.log(`Function Scope`, a , b, c);
}
test();

console.log('Global Scope', a, b, c)

// Template Literals , Template Strings , Backticks ``````
// String Interpolation
// Multiline String
// Expression Interpolation

// Array Destructuring
//let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// let [fruit1, fruit2, fruit3, , fruit5] = fruits;
// console.log(fruit1, fruit2, fruit3, fruit4);


// Swawping Variables
/* let a, b;
a = 10;
b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b); */

// Promise
// Successful Promise - resolve
// Failed, Unsuccessful Promise - reject
// Promise.all
/* let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 2;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
    }, 4000);
});
prom.then((message)=>{
    console.log('This is in the then ' + message);
}).catch((message)=>{
    console.log('This is in the catch ' + message);
})

console.log('This is after the promise'); */

// Async Await



// Object Oriented Programming
