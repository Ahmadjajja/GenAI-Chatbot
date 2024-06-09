let display = document.getElementById("display");
let previousInput = null
let currentInput = "0"
let operator = null
let dotExist = false

function displayValue() {
    display.innerHTML = currentInput
}

function clearDisplay() {
    previousInput = null
    currentInput = "0"
    operator = null
    dotExist = false
    displayValue()
}


function appendNumber(num) {
    if (currentInput === "0") {
        if (num == ".") {
            dotExist = true
            currentInput += num
        } else {
            currentInput = num
        }
    } else {
        if (dotExist == false || num != ".") {
            currentInput += num
            if (num == ".") {
                dotExist = true
            }
        }
    }
    displayValue()
}

function calculateResult() {
    if (operator) {
        switch (operator) {
            case "+":
                currentInput = parseFloat(previousInput) + parseFloat(currentInput)
                displayValue()
                break;
            case "-":
                currentInput = parseFloat(previousInput) - parseFloat(currentInput)
                displayValue()
                break;
            case "/":
                currentInput = parseFloat(previousInput) / parseFloat(currentInput)
                displayValue()
                break;
            case "*":
                currentInput = parseFloat(previousInput) * parseFloat(currentInput)
                displayValue()
                break;
            case "%":
                currentInput = parseFloat(previousInput) % parseFloat(currentInput)
                displayValue()
                break;
        
            default:
                break;
        }
        currentInput = "0"
    }
}

function appendOperator(op) {
    if (previousInput != null) {
        calculateResult()
    }

    operator = op
    previousInput = currentInput
    currentInput = "0"
}