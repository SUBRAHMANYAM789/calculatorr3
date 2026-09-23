# Calculator Project - Complete Feature List

## 📁 Project Structure

```
calculator/
├── calculator.js      # Core calculator functions library
├── test.js           # Test suite for all functions
├── index.html        # Web interface
├── style.css         # Styling for web interface
├── app.js            # Web app logic
├── package.json      # NPM package configuration
├── README.md         # Documentation
└── FEATURES.md       # This file
```

## 🧮 Core Calculator Functions (calculator.js)

### 1. Basic Arithmetic Operations (5 functions)
- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division with zero check
- `modulo(a, b)` - Remainder operation

### 2. Power and Root Operations (6 functions)
- `power(a, b)` - a raised to power b
- `square(a)` - Square of a number
- `cube(a)` - Cube of a number
- `squareRoot(a)` - Square root
- `cubeRoot(a)` - Cube root
- `nthRoot(a, n)` - Nth root

### 3. Trigonometric Functions (7 functions)
- `sine(angle)` - Sine (radians)
- `cosine(angle)` - Cosine (radians)
- `tangent(angle)` - Tangent (radians)
- `arcSine(value)` - Inverse sine
- `arcCosine(value)` - Inverse cosine
- `arcTangent(value)` - Inverse tangent
- `arcTangent2(y, x)` - Two-argument arctangent

### 4. Angle Conversion (2 functions)
- `degreesToRadians(degrees)` - Convert degrees to radians
- `radiansToDegrees(radians)` - Convert radians to degrees

### 5. Logarithmic Functions (5 functions)
- `naturalLog(a)` - Natural logarithm (ln)
- `log10(a)` - Logarithm base 10
- `log2(a)` - Logarithm base 2
- `logBase(a, base)` - Custom base logarithm
- `exponential(x)` - e^x

### 6. Rounding and Absolute Value (6 functions)
- `absolute(a)` - Absolute value
- `round(a)` - Round to nearest integer
- `floor(a)` - Round down
- `ceiling(a)` - Round up
- `truncate(a)` - Remove decimal part
- `roundToDecimal(a, decimals)` - Round to specific decimal places

### 7. Statistical Functions (9 functions)
- `sum(numbers)` - Sum of array
- `average(numbers)` - Mean/average
- `median(numbers)` - Median value
- `mode(numbers)` - Most frequent value
- `range(numbers)` - Max - Min
- `variance(numbers)` - Statistical variance
- `standardDeviation(numbers)` - Standard deviation
- `minimum(numbers)` - Minimum value
- `maximum(numbers)` - Maximum value

### 8. Factorial and Combinatorics (3 functions)
- `factorial(n)` - n! factorial
- `permutation(n, r)` - nPr permutation
- `combination(n, r)` - nCr combination

### 9. Percentage Calculations (4 functions)
- `percentage(value, total)` - Calculate percentage
- `percentageOf(percent, total)` - Get value from percentage
- `percentageIncrease(oldValue, newValue)` - % increase
- `percentageDecrease(oldValue, newValue)` - % decrease

### 10. Financial Calculations (2 functions)
- `simpleInterest(principal, rate, time)` - Simple interest
- `compoundInterest(principal, rate, time, frequency)` - Compound interest

### 11. Random Number Generation (2 functions)
- `randomInt(min, max)` - Random integer
- `randomFloat(min, max)` - Random float

### 12. Prime Number Functions (2 functions)
- `isPrime(n)` - Check if number is prime
- `getPrimesUpTo(n)` - Get all primes up to n

### 13. Number Theory (2 functions)
- `gcd(a, b)` - Greatest Common Divisor
- `lcm(a, b)` - Least Common Multiple

### 14. Hyperbolic Functions (3 functions)
- `sinh(x)` - Hyperbolic sine
- `cosh(x)` - Hyperbolic cosine
- `tanh(x)` - Hyperbolic tangent

## 🌐 Web Interface Features

### Display
- Large, easy-to-read display
- Real-time input visualization
- Error handling with visual feedback

### Basic Calculator
- Number buttons (0-9)
- Decimal point
- Basic operators (+, -, ×, ÷)
- Percentage (%)
- Power (^)
- Clear (C) and Delete (DEL)
- Equals (=)

### Advanced Functions
- Square root (√)
- Square (x²)
- Cube (x³)
- Factorial (x!)
- Trigonometric (sin, cos, tan)
- Logarithmic (log, ln)
- Exponential (e^x)
- Absolute value (|x|)
- Pi constant (π)

### Additional Features
- **History tracking** - Last 10 calculations
- **Keyboard support** - Full keyboard input
- **Responsive design** - Works on mobile and desktop
- **Beautiful UI** - Modern gradient design
- **Error handling** - Graceful error messages

### Keyboard Shortcuts
- `0-9` - Number input
- `+, -, *, /` - Operators
- `.` - Decimal point
- `Enter` or `=` - Calculate
- `Escape` or `C` - Clear
- `Backspace` - Delete last character

## 📊 Total Function Count

**58 Mathematical Functions** in calculator.js covering:
- Arithmetic
- Algebra
- Trigonometry
- Statistics
- Number Theory
- Financial Math
- And more!

## 🚀 Usage

### As a Library (Node.js)
```javascript
const calc = require('./calculator.js');
console.log(calc.add(5, 3));  // 8
```

### As a Web App
Simply open `index.html` in a web browser!

### Run Tests
```bash
node test.js
```

## ✨ Key Features

✅ Comprehensive mathematical operations
✅ Error handling for all edge cases
✅ Well-documented code
✅ Modular and reusable
✅ Web interface included
✅ Test suite included
✅ Keyboard support
✅ Calculation history
✅ Responsive design
✅ Production-ready

## 🎯 Perfect For

- Learning JavaScript
- Mathematical computations
- Web development projects
- Educational purposes
- Scientific calculations
- Financial calculations
- Statistical analysis

---

**Created with ❤️ - A complete JavaScript calculator solution!**
