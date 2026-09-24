# 🚀 Quick Start Guide

## Get Started in 3 Steps!

### 1️⃣ Use the Web Calculator
```bash
# Just open this file in your browser:
calculator/index.html
```
**That's it!** You now have a fully functional calculator with:
- Basic operations (+, -, ×, ÷)
- Advanced functions (√, x², sin, cos, log, etc.)
- Calculation history
- Keyboard support

---

### 2️⃣ Use as JavaScript Library
```javascript
// Import the calculator
const calc = require('./calculator.js');

// Start calculating!
calc.add(10, 5);           // 15
calc.multiply(7, 8);       // 56
calc.squareRoot(144);      // 12
calc.factorial(5);         // 120
```

---

### 3️⃣ Run the Tests
```bash
node test.js
```
See all 58 functions in action!

---

## 🎯 Most Common Functions

### Basic Math
```javascript
calc.add(5, 3)              // 8
calc.subtract(10, 4)        // 6
calc.multiply(6, 7)         // 42
calc.divide(20, 4)          // 5
```

### Powers & Roots
```javascript
calc.power(2, 8)            // 256
calc.square(9)              // 81
calc.squareRoot(144)        // 12
```

### Statistics
```javascript
const numbers = [5, 10, 15, 20, 25];
calc.average(numbers)       // 15
calc.median(numbers)        // 15
calc.sum(numbers)           // 75
```

### Percentages
```javascript
calc.percentage(25, 200)              // 12.5%
calc.percentageOf(20, 150)            // 30
calc.percentageIncrease(100, 150)     // 50%
```

---

## ⌨️ Keyboard Shortcuts (Web Calculator)

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `+ - * /` | Operators |
| `Enter` or `=` | Calculate |
| `Esc` or `C` | Clear |
| `Backspace` | Delete last |

---

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **All Functions**: See `FEATURES.md`
- **Examples**: See `test.js`

---

## 💡 Pro Tips

1. **Web Calculator**: Works offline - no internet needed!
2. **Error Handling**: All functions validate input automatically
3. **Chaining**: Use results in new calculations
4. **History**: Web calculator saves last 10 calculations

---

## 🎉 You're Ready!

Start calculating now! Open `index.html` or import `calculator.js` in your project.

**Happy Calculating! 🧮**
