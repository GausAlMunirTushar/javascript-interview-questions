# JavaScript Inteview Question
let student ={
    name: 'John',
    age: 23,
    address: '123 Main St',
    phone: '555-555-5555',
    email: 'gausalmunirtushar@gmail.com'
}

let student_json = JSON.stringify(student);
console.log(student_json);
console.log(typeof student_json);

let student_new_json = JSON.parse(student_json);
console.log(student_new_json);