// Define a function
/* function hello() {
    console.log("hello world")
}
hello(); */

// Arrow Function
// Parentheis can be avoided when there is snigle parameter
// Curly bracen be avoide when there is just a single statement 
/* let hello =  ()=>{
    console.log("Hello")
}
hello()
let getSqure = (num)=>  num*num;
getSqure(2)
 */
// Callback Function
/* numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((num)=>{
    console.log(num)
}); */

// const age = 23;
// console.log(`My age is ${age}`)

// Swapping Variables
let a, b;
a = 10;
b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

// Object Destructing:
/* let person = {
    firstName: "Gaus Al Munir",
    lastName: "Tushar",
    dob: "14-03-2001"
} */

// let {firstName, lastName, dob} = person;
// console.log(firstName, lastName, dob);
/* 
function displayPersonDetails({firstName, lastName, dob}){
    console.log(firstName, lastName, dob)
}
displayPersonDetails(person); */


//-------------------------------------------------------

// Spread Operator
/* let name = "GausAlMunirTushar"
let nameLetter = [...name]
console.log(nameLetter) */

// Spread on Object (ES8)
/* let person = {
    firstName: "Gaus",
    lastName: "Tushar"
}
let newPerson = {...person, dob: "14-03-2001"}
console.log(newPerson) */

// Spread Operator with Function Parameters:
/* let person = ["Gaus Al Munir", "Tushar"];
let helloMessage = (firstName, lastName)=>{
    console.log(`Hello ${firstName} ${lastName}`)
}
helloMessage(...person) */

// Rest Operators
/* let num = [12, 23, 24]
let test = (name, ...numbers)=>{ // rest 
    console.log(name)
    console.log(numbers)
}
test("Tushar", 32,23,24)
test("Gaus", ...num) // Spread */
