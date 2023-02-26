// Class ES6
// Class in a template for creating objcts
/* Object Oriented Programming শেখার ক্ষেত্রে যে ৪টি বিষয়ে বেশি ফোকাস করবেন
১মঃ Class, Constructor & Object
২য়ঃ Static Properties, Interface, Function
৩য়ঃ Inheritance, method overriding, abstract class
৪র্থঃ Access Modifiers */

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName,
        this.lastName = lastName,
        this.dob = dob
    }
    greeting(){
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}


// Sub Class
// Inheritance:

class Customer extends Person {
    constructor(firstName, lastName, phone, id){
        super(firstName, lastName)
        this.phone = phone,
        this.customerId = id
    }
}
let customer1 = new Customer("Gaus ", "Al", "01910533370", "476658");
console.log(customer1.greeting())


// Static Function