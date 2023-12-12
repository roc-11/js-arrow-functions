/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersArrow = (a, b) => {
    return a + b;
}
let sumArrow = addTwoNumbersArrow(4, 5);
console.log(sumArrow);

// Single Line Arrow Function With Parameters
const addTwoNums = (a, b) => a + b;
let sum3 = addTwoNums(6, 10);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());
