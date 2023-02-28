// Document Object Model
// What is DOM ?

// Selector
// Getting a Element
// document.getElementById()
/* let list = document.getElementById('list');
list = document.getElementById('list').className;

console.log(list)
 */
// Changing the style of the element
/* document.getElementById('heading').style.background = '#333'
document.getElementById('heading').style.color = '#fff'
document.getElementById('heading').style.textAlign = 'center' */

// Chaning Content
/* let heading = document.getElementById('heading');
heading.innerText = 'Hey How are You';
heading.innerHTML = '<i>Hey Baby </i>' */

// document.querySelector('')
/* heading.querySelector('h1');
heading.style.padding = '20px 10px';
heading.style.border = 'none'
heading.style.borderRadius = '10px';

let listItem = document.querySelector('ul li')
listItem.innerText = 'hello'
listItem = document.querySelector('li:nth-child(1)')
listItem.innerText = 'Programming'


// Multi Selectors */
// document.getElementsByClassName)
/* list = document.getElementsByClassName('simple')
list[1].style.color = 'green' */

// document.getElementByTagName()



// document.querySelectorAll() 
// id -> #
// className -> .
// tagName -> ol
/* let lis = Array.from(list);
lis.forEach(item => {
    console.log(item)
});
list = document.querySelectorAll('ul li');
console.log(list)
list.forEach(function (item){
    console.log(item)
})

let listEven = document.querySelectorAll('li:nth-child(even)');
let listOdd = document.querySelectorAll('li:nth-child(odd)')
listEven.forEach((item) =>{
    item.style.color = 'red'
    item.style.fontSize = '30px'
})
listOdd.forEach(function (item){
    item.style.color = 'green'
}) */



// Terversing the DOM
