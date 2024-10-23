import { backend } from 'declarations/backend';

const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let currentOperation = null;
let previousInput = null;

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            if (previousInput !== null) {
                calculate();
            }
            currentOperation = button.textContent;
            previousInput = parseFloat(currentInput);
            currentInput = '';
        }
    });
});

equalsButton.addEventListener('click', calculate);

clearButton.addEventListener('click', () => {
    currentInput = '';
    currentOperation = null;
    previousInput = null;
    updateDisplay();
});

function updateDisplay() {
    display.value = currentInput;
}

async function calculate() {
    if (previousInput !== null && currentOperation !== null && currentInput !== '') {
        const num1 = previousInput;
        const num2 = parseFloat(currentInput);
        let result;

        try {
            switch (currentOperation) {
                case '+':
                    result = await backend.add(num1, num2);
                    break;
                case '-':
                    result = await backend.subtract(num1, num2);
                    break;
                case '*':
                    result = await backend.multiply(num1, num2);
                    break;
                case '/':
                    const divisionResult = await backend.divide(num1, num2);
                    if (divisionResult === null) {
                        throw new Error('Division by zero');
                    }
                    result = divisionResult;
                    break;
            }

            currentInput = result.toString();
            previousInput = null;
            currentOperation = null;
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
            console.error('Calculation error:', error);
        }
    }
}
