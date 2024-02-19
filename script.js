// // Selecting the output element where the number will be displayed.
// const outputNum = document.getElementById("output");

// // Selecting all elements with the class name "btn".
// const elements = document.getElementsByClassName("btn");

// // Looping through the NodeList object elements to add an event listener to each button.
// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("click", function() {
//         // Setting the textContent of the outputNum to the button's name (which corresponds to its number).
//         outputNum.textContent = this.name; // 'this' refers to the button being clicked.
//     });
// }

// Selecting the output element where the number will be displayed.
const outputNum = document.getElementById("output");

let firstNum = 0;
let operation = null;
let isNewNumber = true;

function setNumber(num) {
    if (isNewNumber) {
        outputNum.textContent = num;
        isNewNumber = false;
    } else {
        outputNum.textContent += num;
    }
}

function performOperation(op) {
    if (!isNewNumber) {
        firstNum = parseFloat(outputNum.textContent);
        isNewNumber = true;
    }
    operation = op;
}

function calculate() {
    if (!operation) return;
    const secondNum = parseFloat(outputNum.textContent);
    let result;
    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }
    outputNum.textContent = result;
    operation = null; // Clear the operation after calculating
    isNewNumber = true; // Ready to start a new number
}

// Ensure this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByClassName("btn");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            const value = this.textContent;
            if (value >= '0' && value <= '9') {
                setNumber(value);
            } else if (['+', '-', '*', '/'].includes(value)) {
                performOperation(value);
            } else if (value === '=') {
                calculate();
            }
        });
    }
});

// We get and store the first number then the second number 
// Then Use an arithmetic 

// We can use a switch statment for the arithmetics + - * /
