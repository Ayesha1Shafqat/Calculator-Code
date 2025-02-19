# Calculator-Code
//Here in the Calculator code in html CSS and JavaScript. it takes input and calculates values.
//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div class="buttons">
            <button class="btn" onclick="appendNumber(7)">7</button>
            <button class="btn" onclick="appendNumber(8)">8</button>
            <button class="btn" onclick="appendNumber(9)">9</button>
            <button class="btn operator" onclick="setOperator('+')">+</button>
            
            <button class="btn" onclick="appendNumber(4)">4</button>
            <button class="btn" onclick="appendNumber(5)">5</button>
            <button class="btn" onclick="appendNumber(6)">6</button>
            <button class="btn operator" onclick="setOperator('-')">-</button>
            
            <button class="btn" onclick="appendNumber(1)">1</button>
            <button class="btn" onclick="appendNumber(2)">2</button>
            <button class="btn" onclick="appendNumber(3)">3</button>
            <button class="btn operator" onclick="setOperator('*')">*</button>
            
            <button class="btn" onclick="appendNumber(0)">0</button>
            <button class="btn" onclick="clearDisplay()">C</button>
            <button class="btn equal" onclick="calculateResult()">=</button>
            <button class="btn operator" onclick="setOperator('/')">/</button>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>

<!--css part-->
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.calculator {
    width: 250px;
    background-color: crimson;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(224, 220, 220, 0.3);
}

#display {
    width: 100%;
    height: 50px;
    font-size: 1.5em;
    text-align: right;
    padding-left: 10px;
   
    margin-bottom: 10px;
    border: none;
    outline: none;
    background:white;
    color: rgb(15, 13, 13);
    border-radius: 5px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

.btn {
    width: 100%;
    height: 50px;
    font-size: 1.2em;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s;
}

.btn:hover {
    opacity: 0.8;
}

.operator {
    background: hsl(64, 90%, 51%);
    color: #1a1717;
}

.equal {
    background: #2bcc03;
    color:black;
}

.btn:not(.operator, .equal) {
    background: pink;
    color: black;
}

.btn:active {
    transform: scale(0.95);
}

<!--JavaScript-->
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



