// Error Handling
console.log('Before Error');

/*  try{
    test()

 } catch(err){
    console.log(err.message)
 }
console.log('After Error')
 */

// Rest Operators
/* let num = [12, 23, 24]
let test = (name, ...numbers)=>{ // rest 
    console.log(name)
    console.log(numbers)
}
test("Tushar", 32,23,24)
test("Gaus", ...num) // Spread */


// Before ES6 Classes

// ES5 Contructor:
// function Person(name, age){
//     this.name;
//     this.age;
// }
// let person1 = new Person("Tushar", 22);
// console.log(person1)

// ES6 Class
/* class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person('Tushar', 22)
console.log(person1) */

// Symbols


// Iterators and Generators





// 
let mySet = new Set([1, 3, 4, 5, 3, 5, 5]);
// add
mySet.add(2)
console.log(mySet)
// Delete
mySet.delete(4);
console.log(mySet)
// Check with has
console.log(mySet.has(5))
// Size
console.log(mySet.size)
