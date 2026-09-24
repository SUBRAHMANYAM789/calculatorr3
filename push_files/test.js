/**
 * Test file for calculator functions
 */

const calc = require('./calculator.js');

console.log('=== CALCULATOR TESTS ===\n');

// Basic Arithmetic
console.log('--- Basic Arithmetic ---');
console.log('add(5, 3):', calc.add(5, 3));
console.log('subtract(10, 4):', calc.subtract(10, 4));
console.log('multiply(6, 7):', calc.multiply(6, 7));
console.log('divide(20, 4):', calc.divide(20, 4));
console.log('modulo(17, 5):', calc.modulo(17, 5));

// Power and Roots
console.log('\n--- Power and Roots ---');
console.log('power(2, 8):', calc.power(2, 8));
console.log('square(9):', calc.square(9));
console.log('cube(3):', calc.cube(3));
console.log('squareRoot(144):', calc.squareRoot(144));
console.log('cubeRoot(27):', calc.cubeRoot(27));
console.log('nthRoot(32, 5):', calc.nthRoot(32, 5));

// Trigonometric
console.log('\n--- Trigonometric ---');
console.log('sine(Math.PI / 2):', calc.sine(Math.PI / 2));
console.log('cosine(0):', calc.cosine(0));
console.log('tangent(Math.PI / 4):', calc.tangent(Math.PI / 4));
console.log('degreesToRadians(90):', calc.degreesToRadians(90));
console.log('radiansToDegrees(Math.PI):', calc.radiansToDegrees(Math.PI));

// Logarithmic
console.log('\n--- Logarithmic ---');
console.log('naturalLog(Math.E):', calc.naturalLog(Math.E));
console.log('log10(100):', calc.log10(100));
console.log('log2(8):', calc.log2(8));
console.log('exponential(1):', calc.exponential(1));

// Rounding
console.log('\n--- Rounding ---');
console.log('absolute(-42):', calc.absolute(-42));
console.log('round(3.7):', calc.round(3.7));
console.log('floor(4.9):', calc.floor(4.9));
console.log('ceiling(2.1):', calc.ceiling(2.1));
console.log('roundToDecimal(3.14159, 2):', calc.roundToDecimal(3.14159, 2));

// Statistical
console.log('\n--- Statistical ---');
const numbers = [5, 10, 15, 20, 25];
console.log('Numbers:', numbers);
console.log('sum:', calc.sum(numbers));
console.log('average:', calc.average(numbers));
console.log('median:', calc.median(numbers));
console.log('minimum:', calc.minimum(numbers));
console.log('maximum:', calc.maximum(numbers));
console.log('range:', calc.range(numbers));
console.log('variance:', calc.variance(numbers));
console.log('standardDeviation:', calc.standardDeviation(numbers));

// Factorial and Combinatorics
console.log('\n--- Factorial and Combinatorics ---');
console.log('factorial(5):', calc.factorial(5));
console.log('permutation(5, 3):', calc.permutation(5, 3));
console.log('combination(5, 3):', calc.combination(5, 3));

// Percentage
console.log('\n--- Percentage ---');
console.log('percentage(25, 200):', calc.percentage(25, 200));
console.log('percentageOf(20, 150):', calc.percentageOf(20, 150));
console.log('percentageIncrease(100, 150):', calc.percentageIncrease(100, 150));

// Financial
console.log('\n--- Financial ---');
console.log('simpleInterest(1000, 5, 2):', calc.simpleInterest(1000, 5, 2));
console.log('compoundInterest(1000, 5, 2, 1):', calc.compoundInterest(1000, 5, 2, 1));

// Prime Numbers
console.log('\n--- Prime Numbers ---');
console.log('isPrime(17):', calc.isPrime(17));
console.log('isPrime(18):', calc.isPrime(18));
console.log('getPrimesUpTo(20):', calc.getPrimesUpTo(20));

// GCD and LCM
console.log('\n--- GCD and LCM ---');
console.log('gcd(48, 18):', calc.gcd(48, 18));
console.log('lcm(12, 18):', calc.lcm(12, 18));

console.log('\n=== ALL TESTS COMPLETED ===');
