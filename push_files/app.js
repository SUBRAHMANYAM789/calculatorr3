/**
 * Calculator Web Application
 */

let displayValue = '0';
let history = [];

// Update display
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Append to display
function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

// Clear display
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

// Delete last character
function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

// Calculate result
function calculate() {
    try {
        const expression = displayValue;
        const result = eval(displayValue);
        
        // Add to history
        addToHistory(expression + ' = ' + result);
        
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            displayValue = '0';
            updateDisplay();
        }, 1500);
    }
}

// Apply advanced functions
function applyFunction(func) {
    try {
        const currentValue = parseFloat(displayValue);
        let result;
        
        switch(func) {
            case 'sqrt':
                result = Math.sqrt(currentValue);
                break;
            case 'square':
                result = currentValue * currentValue;
                break;
            case 'cube':
                result = currentValue * currentValue * currentValue;
                break;
            case 'factorial':
                result = factorial(currentValue);
                break;
            case 'sin':
                result = Math.sin(currentValue);
                break;
            case 'cos':
                result = Math.cos(currentValue);
                break;
            case 'tan':
                result = Math.tan(currentValue);
                break;
            case 'log':
                result = Math.log10(currentValue);
                break;
            case 'ln':
                result = Math.log(currentValue);
                break;
            case 'exp':
                result = Math.exp(currentValue);
                break;
            case 'abs':
                result = Math.abs(currentValue);
                break;
            default:
                result = currentValue;
        }
        
        addToHistory(func + '(' + currentValue + ') = ' + result);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            displayValue = '0';
            updateDisplay();
        }, 1500);
    }
}

// Factorial helper function
function factorial(n) {
    if (n < 0) throw new Error("Factorial not defined for negative numbers");
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Add to history
function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 10) {
        history.pop();
    }
    updateHistory();
}

// Update history display
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    history.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.textContent = entry;
        historyList.appendChild(div);
    });
}

// Clear history
function clearHistory() {
    history = [];
    updateHistory();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// Initialize
updateDisplay();
