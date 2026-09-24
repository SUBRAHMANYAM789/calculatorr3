# Quick Start Guide

## 🚀 Get Started in 30 Seconds

### 1. Navigate to Project
```bash
cd calculator-project
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Run Calculator
```bash
bun run src/index.ts
```

### 4. Try It Out!
```
calc> 2 + 3
= 5

calc> (10 + 5) * 2
= 30

calc> help
[Shows all commands]
```

## 📖 Common Commands

| Command | Description | Example |
|---------|-------------|---------|
| `<expression>` | Calculate any expression | `2 + 3 * 4` |
| `help` | Show help menu | `help` |
| `history` | Show calculation history | `history` |
| `clear` | Clear history | `clear` |
| `memory` | Show memory value | `memory` |
| `m+ <value>` | Add to memory | `m+ 100` |
| `m- <value>` | Subtract from memory | `m- 50` |
| `mc` | Clear memory | `mc` |
| `exit` | Exit calculator | `exit` |

## 🧮 Expression Examples

### Basic Math
```
calc> 5 + 3
= 8

calc> 10 - 4
= 6

calc> 6 * 7
= 42

calc> 20 / 4
= 5
```

### Advanced Math
```
calc> 2 ^ 3
= 8

calc> 2 * 3 ^ 2
= 18

calc> (2 + 3) * 4
= 20
```

### Complex Expressions
```
calc> (10 + 5) * 2 - 8 / 4
= 28

calc> 2 + 3 * 4 - 5 / 2
= 11.5

calc> ((2 + 3) * 4) - 5
= 15
```

### Negative Numbers
```
calc> -5 + 3
= -2

calc> 10 + -5
= 5

calc> (-5) * 2
= -10
```

### Decimals
```
calc> 1.5 + 2.5
= 4

calc> 10.5 / 2
= 5.25

calc> 3.14 * 2
= 6.28
```

## 💾 Memory Operations

```
calc> m+ 100
Added 100 to memory. Memory: 100

calc> m+ 50
Added 50 to memory. Memory: 150

calc> memory
Memory: 150

calc> m- 30
Subtracted 30 from memory. Memory: 120

calc> mc
Memory cleared
```

## 📜 History

```
calc> 2 + 3
= 5

calc> 5 * 4
= 20

calc> history
[2024-01-01T12:00:00.000Z] 2 + 3 = 5
[2024-01-01T12:00:01.000Z] 5 * 4 = 20

calc> clear
History cleared
```

## 🧪 Run Tests

```bash
bun test
```

Expected output:
```
✓ Calculator > Basic Operations > should add two numbers
✓ Calculator > Basic Operations > should subtract two numbers
✓ Calculator > Basic Operations > should multiply two numbers
...
[All tests pass]
```

## 📚 Documentation

| File | Description |
|------|-------------|
| `README.md` | Project overview |
| `SUMMARY.md` | Complete project summary |
| `PLAN.md` | Development plan |
| `docs/API.md` | API reference |
| `docs/ARCHITECTURE.md` | Architecture guide |
| `docs/STRUCTURE.md` | Project structure |

## 🎯 Supported Operations

### Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `^` Power/Exponentiation
- `()` Parentheses

### Operator Precedence (High to Low)
1. Parentheses `()`
2. Power `^`
3. Multiplication `*`, Division `/`
4. Addition `+`, Subtraction `-`

## ⚠️ Error Handling

The calculator handles errors gracefully:

```
calc> 5 / 0
Error: Division by zero

calc> 2 + abc
Error: Invalid expression

calc> (2 + 3
Error: Invalid expression
```

## 🎨 Features

✅ Basic arithmetic operations
✅ Advanced operations (power, sqrt, percentage)
✅ Memory functions (M+, M-, MR, MC)
✅ Expression parsing with precedence
✅ Parentheses support (nested)
✅ Negative numbers
✅ Decimal numbers
✅ History tracking
✅ Error handling
✅ Input validation

## 🔧 Project Structure

```
calculator-project/
├── src/
│   ├── core/           # Calculator logic
│   ├── ui/             # CLI interface
│   ├── utils/          # Utilities
│   └── index.ts        # Entry point
├── tests/              # Test files
├── docs/               # Documentation
└── package.json        # Configuration
```

## 💡 Tips

1. **Use parentheses** for complex expressions
2. **Check history** to review past calculations
3. **Use memory** to store intermediate results
4. **Type help** anytime for command list
5. **Read docs/** for detailed information

## 🐛 Troubleshooting

### Calculator won't start
```bash
# Make sure you're in the right directory
cd calculator-project

# Install dependencies
bun install

# Try running again
bun run src/index.ts
```

### Tests fail
```bash
# Make sure dependencies are installed
bun install

# Run tests with verbose output
bun test --verbose
```

### Expression errors
- Check for balanced parentheses
- Ensure valid operators (+, -, *, /, ^)
- Use spaces for clarity: `2 + 3` instead of `2+3`

## 📞 Need Help?

1. Type `help` in the calculator
2. Read `docs/API.md` for API reference
3. Read `docs/ARCHITECTURE.md` for design details
4. Check `SUMMARY.md` for complete overview

## 🎓 Learning Path

1. **Start here** - Run the calculator and try examples
2. **Read README.md** - Understand the project
3. **Read SUMMARY.md** - See what's included
4. **Read docs/API.md** - Learn the API
5. **Read docs/ARCHITECTURE.md** - Understand the design
6. **Read the code** - See how it works
7. **Run tests** - Verify everything works
8. **Extend it** - Add your own features!

## ✨ Next Steps

- [ ] Try all the example expressions
- [ ] Experiment with memory functions
- [ ] Check the history feature
- [ ] Run the test suite
- [ ] Read the documentation
- [ ] Explore the source code
- [ ] Add your own features!

---

**Happy Calculating! 🎉**
