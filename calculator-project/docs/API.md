# Calculator API Documentation

## Calculator Class

### Constructor
```typescript
new Calculator()
```
Creates a new calculator instance with initialized state.

---

## Basic Operations

### add(a: number, b: number): number
Adds two numbers together.

**Parameters:**
- `a` - First number
- `b` - Second number

**Returns:** Sum of a and b

**Example:**
```typescript
const calc = new Calculator();
calc.add(5, 3); // Returns 8
```

---

### subtract(a: number, b: number): number
Subtracts b from a.

**Parameters:**
- `a` - Number to subtract from
- `b` - Number to subtract

**Returns:** Difference (a - b)

**Example:**
```typescript
calc.subtract(10, 3); // Returns 7
```

---

### multiply(a: number, b: number): number
Multiplies two numbers.

**Parameters:**
- `a` - First number
- `b` - Second number

**Returns:** Product of a and b

**Example:**
```typescript
calc.multiply(4, 5); // Returns 20
```

---

### divide(a: number, b: number): number
Divides a by b.

**Parameters:**
- `a` - Dividend
- `b` - Divisor

**Returns:** Quotient (a / b)

**Throws:** Error if b is zero

**Example:**
```typescript
calc.divide(10, 2); // Returns 5
calc.divide(5, 0);  // Throws Error: "Cannot divide by zero"
```

---

## Advanced Operations

### power(a: number, b: number): number
Raises a to the power of b.

**Parameters:**
- `a` - Base
- `b` - Exponent

**Returns:** a raised to the power of b

**Example:**
```typescript
calc.power(2, 3);  // Returns 8
calc.power(5, 0);  // Returns 1
calc.power(2, -1); // Returns 0.5
```

---

### sqrt(a: number): number
Calculates the square root of a.

**Parameters:**
- `a` - Number to calculate square root of

**Returns:** Square root of a

**Throws:** Error if a is negative

**Example:**
```typescript
calc.sqrt(9);  // Returns 3
calc.sqrt(16); // Returns 4
calc.sqrt(-1); // Throws Error
```

---

### percentage(value: number, percent: number): number
Calculates percentage of a value.

**Parameters:**
- `value` - The base value
- `percent` - The percentage to calculate

**Returns:** percent% of value

**Example:**
```typescript
calc.percentage(100, 50); // Returns 50 (50% of 100)
calc.percentage(200, 25); // Returns 50 (25% of 200)
```

---

## Memory Operations

### memoryAdd(value: number): void
Adds a value to memory.

**Parameters:**
- `value` - Value to add to memory

**Example:**
```typescript
calc.memoryAdd(10);
calc.memoryAdd(5);
calc.memoryRecall(); // Returns 15
```

---

### memorySubtract(value: number): void
Subtracts a value from memory.

**Parameters:**
- `value` - Value to subtract from memory

**Example:**
```typescript
calc.memoryAdd(20);
calc.memorySubtract(5);
calc.memoryRecall(); // Returns 15
```

---

### memoryRecall(): number
Retrieves the current memory value.

**Returns:** Current memory value

**Example:**
```typescript
calc.memoryAdd(42);
calc.memoryRecall(); // Returns 42
```

---

### memoryClear(): void
Clears the memory (sets to 0).

**Example:**
```typescript
calc.memoryAdd(100);
calc.memoryClear();
calc.memoryRecall(); // Returns 0
```

---

## History Operations

### getHistory(): string[]
Returns a copy of the calculation history.

**Returns:** Array of history entries with timestamps

**Example:**
```typescript
calc.add(2, 3);
calc.multiply(4, 5);
const history = calc.getHistory();
// Returns:
// [
//   "[2024-01-01T12:00:00.000Z] 2 + 3 = 5",
//   "[2024-01-01T12:00:01.000Z] 4 × 5 = 20"
// ]
```

---

### clearHistory(): void
Clears all calculation history.

**Example:**
```typescript
calc.clearHistory();
calc.getHistory(); // Returns []
```

---

## State Management

### getCurrentValue(): number
Gets the current calculator value.

**Returns:** Current value

---

### setCurrentValue(value: number): void
Sets the current calculator value.

**Parameters:**
- `value` - Value to set

---

### reset(): void
Resets the calculator to initial state (clears value, memory, and history).

**Example:**
```typescript
calc.add(5, 5);
calc.memoryAdd(10);
calc.reset();
calc.getCurrentValue(); // Returns 0
calc.memoryRecall();    // Returns 0
calc.getHistory();      // Returns []
```

---

## ExpressionParser Class

### Constructor
```typescript
new ExpressionParser()
```
Creates a new expression parser instance.

---

### evaluate(expression: string): number
Evaluates a mathematical expression string.

**Parameters:**
- `expression` - Mathematical expression to evaluate

**Returns:** Result of the expression

**Throws:** Error for invalid expressions or division by zero

**Supported Operators:**
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `^` Power
- `()` Parentheses

**Example:**
```typescript
const parser = new ExpressionParser();
parser.evaluate("2 + 3");           // Returns 5
parser.evaluate("(5 + 3) * 2");     // Returns 16
parser.evaluate("2 ^ 3");           // Returns 8
parser.evaluate("10 / 2 + 3 * 4");  // Returns 17
```

---

## Utility Functions

### Formatters

#### formatNumber(num: number, decimals?: number): string
Formats a number with specified decimal places (default: 2).

#### formatWithCommas(num: number): string
Formats a number with thousand separators.

#### formatScientific(num: number, threshold?: number): string
Formats large/small numbers in scientific notation.

#### formatResult(num: number): string
Smart formatting for display (combines above formatters).

### Validators

#### isValidNumber(input: string): boolean
Checks if a string is a valid number.

#### isValidExpression(expression: string): boolean
Checks if a string is a valid mathematical expression.

#### sanitizeInput(input: string): string
Removes invalid characters from input.

#### isSafeNumber(num: number): boolean
Checks if a number is within safe integer range.

---

## CLI Commands

When running in interactive mode:

- `<expression>` - Evaluate any mathematical expression
- `history` - Show calculation history
- `clear` - Clear history
- `memory` - Show current memory value
- `m+ <value>` - Add value to memory
- `m- <value>` - Subtract value from memory
- `mc` - Clear memory
- `help` - Show help message
- `exit` or `quit` - Exit the calculator

**Example Session:**
```
calc> 2 + 3
= 5

calc> (10 + 5) * 2
= 30

calc> m+ 100
Added 100 to memory. Memory: 100

calc> memory
Memory: 100

calc> history
[2024-01-01T12:00:00.000Z] 2 + 3 = 5
[2024-01-01T12:00:01.000Z] (10 + 5) * 2 = 30
```
