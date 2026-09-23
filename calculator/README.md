# JavaScript Calculator Project

A comprehensive calculator library with extensive mathematical functions for JavaScript/Node.js projects.

## Features

### Basic Arithmetic Operations
- Addition, Subtraction, Multiplication, Division
- Modulo (Remainder)

### Power and Root Operations
- Power (a^b)
- Square, Cube
- Square Root, Cube Root, Nth Root

### Trigonometric Functions
- Sine, Cosine, Tangent
- Arc Sine, Arc Cosine, Arc Tangent
- Angle conversion (Degrees ↔ Radians)

### Logarithmic Functions
- Natural Logarithm (ln)
- Logarithm base 10
- Logarithm base 2
- Custom base logarithm
- Exponential (e^x)

### Rounding and Absolute Value
- Absolute value
- Round, Floor, Ceiling, Truncate
- Round to specific decimal places

### Statistical Functions
- Sum, Average (Mean), Median, Mode
- Range, Variance, Standard Deviation
- Minimum, Maximum

### Factorial and Combinatorics
- Factorial (n!)
- Permutation (nPr)
- Combination (nCr)

### Percentage Calculations
- Calculate percentage
- Get value from percentage
- Percentage increase/decrease

### Financial Calculations
- Simple Interest
- Compound Interest

### Random Number Generation
- Random integer (within range)
- Random float (within range)

### Prime Number Functions
- Check if number is prime
- Get all primes up to n

### Number Theory
- Greatest Common Divisor (GCD)
- Least Common Multiple (LCM)

### Hyperbolic Functions
- Hyperbolic Sine (sinh)
- Hyperbolic Cosine (cosh)
- Hyperbolic Tangent (tanh)

## Installation

Simply include the `calculator.js` file in your project:

```javascript
const calc = require('./calculator.js');
```

## Usage Examples

### Basic Arithmetic
```javascript
calc.add(5, 3);        // 8
calc.subtract(10, 4);  // 6
calc.multiply(6, 7);   // 42
calc.divide(20, 4);    // 5
calc.modulo(17, 5);    // 2
```

### Power and Roots
```javascript
calc.power(2, 8);      // 256
calc.square(9);        // 81
calc.squareRoot(144);  // 12
calc.cubeRoot(27);     // 3
```

### Trigonometry
```javascript
calc.sine(Math.PI / 2);           // 1
calc.cosine(0);                   // 1
calc.degreesToRadians(90);        // 1.5707...
calc.radiansToDegrees(Math.PI);   // 180
```

### Statistical Analysis
```javascript
const numbers = [5, 10, 15, 20, 25];
calc.average(numbers);            // 15
calc.median(numbers);             // 15
calc.standardDeviation(numbers);  // 7.07...
```

### Percentage Calculations
```javascript
calc.percentage(25, 200);              // 12.5
calc.percentageOf(20, 150);            // 30
calc.percentageIncrease(100, 150);     // 50
```

### Financial Calculations
```javascript
// Simple Interest: Principal $1000, Rate 5%, Time 2 years
calc.simpleInterest(1000, 5, 2);       // 100

// Compound Interest: Principal $1000, Rate 5%, Time 2 years, Annual compounding
calc.compoundInterest(1000, 5, 2, 1);  // 102.5
```

### Prime Numbers
```javascript
calc.isPrime(17);          // true
calc.isPrime(18);          // false
calc.getPrimesUpTo(20);    // [2, 3, 5, 7, 11, 13, 17, 19]
```

### Number Theory
```javascript
calc.gcd(48, 18);          // 6
calc.lcm(12, 18);          // 36
calc.factorial(5);         // 120
```

## Running Tests

Run the test file to see all functions in action:

```bash
node test.js
```

Or with Bun:

```bash
bun run test.js
```

## Error Handling

All functions include proper error handling for invalid inputs:

```javascript
try {
  calc.divide(10, 0);  // Throws: "Cannot divide by zero"
} catch (error) {
  console.error(error.message);
}
```

## License

Free to use for any purpose.

## Contributing

Feel free to extend this calculator with additional mathematical functions!
