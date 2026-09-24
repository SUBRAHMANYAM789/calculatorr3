/**
 * Comprehensive Calculator Functions
 * Supports basic arithmetic, advanced math, scientific operations, and more
 */

// ============================================
// BASIC ARITHMETIC OPERATIONS
// ============================================

/**
 * Addition
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Modulo (Remainder)
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot perform modulo with zero");
  }
  return a % b;
}

// ============================================
// POWER AND ROOT OPERATIONS
// ============================================

/**
 * Power (a raised to the power of b)
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * Square
 */
function square(a) {
  return a * a;
}

/**
 * Cube
 */
function cube(a) {
  return a * a * a;
}

/**
 * Square Root
 */
function squareRoot(a) {
  if (a < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(a);
}

/**
 * Cube Root
 */
function cubeRoot(a) {
  return Math.cbrt(a);
}

/**
 * Nth Root
 */
function nthRoot(a, n) {
  if (n === 0) {
    throw new Error("Root degree cannot be zero");
  }
  return Math.pow(a, 1 / n);
}

// ============================================
// TRIGONOMETRIC FUNCTIONS
// ============================================

/**
 * Sine (input in radians)
 */
function sine(angle) {
  return Math.sin(angle);
}

/**
 * Cosine (input in radians)
 */
function cosine(angle) {
  return Math.cos(angle);
}

/**
 * Tangent (input in radians)
 */
function tangent(angle) {
  return Math.tan(angle);
}

/**
 * Arc Sine (returns radians)
 */
function arcSine(value) {
  if (value < -1 || value > 1) {
    throw new Error("Value must be between -1 and 1");
  }
  return Math.asin(value);
}

/**
 * Arc Cosine (returns radians)
 */
function arcCosine(value) {
  if (value < -1 || value > 1) {
    throw new Error("Value must be between -1 and 1");
  }
  return Math.acos(value);
}

/**
 * Arc Tangent (returns radians)
 */
function arcTangent(value) {
  return Math.atan(value);
}

/**
 * Arc Tangent 2 (returns radians, handles quadrants)
 */
function arcTangent2(y, x) {
  return Math.atan2(y, x);
}

// ============================================
// ANGLE CONVERSION
// ============================================

/**
 * Convert Degrees to Radians
 */
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Convert Radians to Degrees
 */
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

// ============================================
// LOGARITHMIC FUNCTIONS
// ============================================

/**
 * Natural Logarithm (base e)
 */
function naturalLog(a) {
  if (a <= 0) {
    throw new Error("Logarithm undefined for non-positive numbers");
  }
  return Math.log(a);
}

/**
 * Logarithm base 10
 */
function log10(a) {
  if (a <= 0) {
    throw new Error("Logarithm undefined for non-positive numbers");
  }
  return Math.log10(a);
}

/**
 * Logarithm base 2
 */
function log2(a) {
  if (a <= 0) {
    throw new Error("Logarithm undefined for non-positive numbers");
  }
  return Math.log2(a);
}

/**
 * Logarithm with custom base
 */
function logBase(a, base) {
  if (a <= 0 || base <= 0 || base === 1) {
    throw new Error("Invalid logarithm parameters");
  }
  return Math.log(a) / Math.log(base);
}

// ============================================
// EXPONENTIAL FUNCTIONS
// ============================================

/**
 * e raised to the power of x
 */
function exponential(x) {
  return Math.exp(x);
}

// ============================================
// ROUNDING AND ABSOLUTE VALUE
// ============================================

/**
 * Absolute Value
 */
function absolute(a) {
  return Math.abs(a);
}

/**
 * Round to nearest integer
 */
function round(a) {
  return Math.round(a);
}

/**
 * Round down (floor)
 */
function floor(a) {
  return Math.floor(a);
}

/**
 * Round up (ceiling)
 */
function ceiling(a) {
  return Math.ceil(a);
}

/**
 * Truncate (remove decimal part)
 */
function truncate(a) {
  return Math.trunc(a);
}

/**
 * Round to specific decimal places
 */
function roundToDecimal(a, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(a * factor) / factor;
}

// ============================================
// STATISTICAL FUNCTIONS
// ============================================

/**
 * Sum of array
 */
function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Average (Mean)
 */
function average(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate average of empty array");
  }
  return sum(numbers) / numbers.length;
}

/**
 * Median
 */
function median(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

/**
 * Mode (most frequent value)
 */
function mode(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mode of empty array");
  }
  
  const frequency = {};
  let maxFreq = 0;
  let modes = [];
  
  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
    }
  });
  
  for (let num in frequency) {
    if (frequency[num] === maxFreq) {
      modes.push(Number(num));
    }
  }
  
  return modes.length === numbers.length ? null : modes;
}

/**
 * Range (difference between max and min)
 */
function range(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate range of empty array");
  }
  return Math.max(...numbers) - Math.min(...numbers);
}

/**
 * Variance
 */
function variance(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate variance of empty array");
  }
  const avg = average(numbers);
  const squaredDiffs = numbers.map(num => Math.pow(num - avg, 2));
  return average(squaredDiffs);
}

/**
 * Standard Deviation
 */
function standardDeviation(numbers) {
  return Math.sqrt(variance(numbers));
}

/**
 * Minimum value
 */
function minimum(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot find minimum of empty array");
  }
  return Math.min(...numbers);
}

/**
 * Maximum value
 */
function maximum(numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot find maximum of empty array");
  }
  return Math.max(...numbers);
}

// ============================================
// FACTORIAL AND COMBINATORICS
// ============================================

/**
 * Factorial
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Permutation (nPr)
 */
function permutation(n, r) {
  if (n < 0 || r < 0 || r > n) {
    throw new Error("Invalid permutation parameters");
  }
  return factorial(n) / factorial(n - r);
}

/**
 * Combination (nCr)
 */
function combination(n, r) {
  if (n < 0 || r < 0 || r > n) {
    throw new Error("Invalid combination parameters");
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// ============================================
// PERCENTAGE CALCULATIONS
// ============================================

/**
 * Calculate percentage
 */
function percentage(value, total) {
  if (total === 0) {
    throw new Error("Total cannot be zero");
  }
  return (value / total) * 100;
}

/**
 * Calculate value from percentage
 */
function percentageOf(percent, total) {
  return (percent / 100) * total;
}

/**
 * Percentage increase
 */
function percentageIncrease(oldValue, newValue) {
  if (oldValue === 0) {
    throw new Error("Old value cannot be zero");
  }
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Percentage decrease
 */
function percentageDecrease(oldValue, newValue) {
  if (oldValue === 0) {
    throw new Error("Old value cannot be zero");
  }
  return ((oldValue - newValue) / oldValue) * 100;
}

// ============================================
// FINANCIAL CALCULATIONS
// ============================================

/**
 * Simple Interest
 */
function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

/**
 * Compound Interest
 */
function compoundInterest(principal, rate, time, frequency = 1) {
  return principal * Math.pow(1 + rate / (100 * frequency), frequency * time) - principal;
}

// ============================================
// RANDOM NUMBER GENERATION
// ============================================

/**
 * Random number between min and max (inclusive)
 */
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Random float between min and max
 */
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// ============================================
// PRIME NUMBER FUNCTIONS
// ============================================

/**
 * Check if number is prime
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Get all prime numbers up to n
 */
function getPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// ============================================
// GCD AND LCM
// ============================================

/**
 * Greatest Common Divisor
 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Least Common Multiple
 */
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

// ============================================
// HYPERBOLIC FUNCTIONS
// ============================================

/**
 * Hyperbolic Sine
 */
function sinh(x) {
  return Math.sinh(x);
}

/**
 * Hyperbolic Cosine
 */
function cosh(x) {
  return Math.cosh(x);
}

/**
 * Hyperbolic Tangent
 */
function tanh(x) {
  return Math.tanh(x);
}

// ============================================
// EXPORTS
// ============================================

module.exports = {
  // Basic arithmetic
  add,
  subtract,
  multiply,
  divide,
  modulo,
  
  // Power and roots
  power,
  square,
  cube,
  squareRoot,
  cubeRoot,
  nthRoot,
  
  // Trigonometric
  sine,
  cosine,
  tangent,
  arcSine,
  arcCosine,
  arcTangent,
  arcTangent2,
  
  // Angle conversion
  degreesToRadians,
  radiansToDegrees,
  
  // Logarithmic
  naturalLog,
  log10,
  log2,
  logBase,
  exponential,
  
  // Rounding
  absolute,
  round,
  floor,
  ceiling,
  truncate,
  roundToDecimal,
  
  // Statistical
  sum,
  average,
  median,
  mode,
  range,
  variance,
  standardDeviation,
  minimum,
  maximum,
  
  // Factorial and combinatorics
  factorial,
  permutation,
  combination,
  
  // Percentage
  percentage,
  percentageOf,
  percentageIncrease,
  percentageDecrease,
  
  // Financial
  simpleInterest,
  compoundInterest,
  
  // Random
  randomInt,
  randomFloat,
  
  // Prime numbers
  isPrime,
  getPrimesUpTo,
  
  // GCD and LCM
  gcd,
  lcm,
  
  // Hyperbolic
  sinh,
  cosh,
  tanh
};
