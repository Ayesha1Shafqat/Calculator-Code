let display = document.getElementById("display");
let currentValue = "";
let shouldResetDisplay = false; 

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentValue = "";
        shouldResetDisplay = false;
    }
    currentValue += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentValue === "") return; 

    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }

    if (/[+\-*/]$/.test(currentValue)) {
        currentValue = currentValue.slice(0, -1); 
    }

    currentValue += " " + operator + " "; 
    updateDisplay();
}

function clearDisplay() {
    currentValue = "";
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(currentValue); 
        currentValue = result.toString();
        updateDisplay();
        shouldResetDisplay = true; 
    } catch (error) {
        currentValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentValue;
}
