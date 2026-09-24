# Project Structure Visualization

## Directory Tree

```
calculator-project/
│
├── 📄 README.md                    # Project overview and getting started
├── 📄 PLAN.md                      # Development plan and roadmap
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 src/                         # Source code
│   │
│   ├── 📄 index.ts                 # Application entry point
│   │
│   ├── 📁 core/                    # Core business logic (pure, no dependencies)
│   │   ├── 📄 Calculator.ts        # Calculator operations and state
│   │   └── 📄 ExpressionParser.ts  # Mathematical expression parser
│   │
│   ├── 📁 ui/                      # User interface layer
│   │   └── 📄 CLI.ts               # Command-line interface
│   │
│   └── 📁 utils/                   # Utility functions
│       ├── 📄 formatters.ts        # Number and output formatting
│       └── 📄 validators.ts        # Input validation and sanitization
│
├── 📁 tests/                       # Test files
│   ├── 📄 Calculator.test.ts       # Calculator unit tests
│   ├── 📄 ExpressionParser.test.ts # Parser unit tests
│   ├── 📄 formatters.test.ts       # Formatter unit tests
│   └── 📄 validators.test.ts       # Validator unit tests
│
└── 📁 docs/                        # Documentation
    ├── 📄 ARCHITECTURE.md          # Architecture and design decisions
    ├── 📄 API.md                   # Complete API documentation
    └── 📄 STRUCTURE.md             # This file
```

## Component Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                         index.ts                            │
│                    (Application Entry)                      │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                          CLI.ts                             │
│                   (User Interface Layer)                    │
│  • Interactive mode                                         │
│  • Command processing                                       │
│  • Display formatting                                       │
└──────────┬──────────────────────────────────┬───────────────┘
           │                                  │
           ▼                                  ▼
┌──────────────────────┐          ┌──────────────────────────┐
│   validators.ts      │          │    formatters.ts         │
│  • Input validation  │          │  • Number formatting     │
│  • Sanitization      │          │  • Display formatting    │
└──────────┬───────────┘          └──────────┬───────────────┘
           │                                  │
           ▼                                  ▼
┌─────────────────────────────────────────────────────────────┐
│                      Core Layer                             │
├─────────────────────────────────────────────────────────────┤
│  Calculator.ts              ExpressionParser.ts             │
│  • Basic operations         • Tokenization                  │
│  • Advanced operations      • Parsing                       │
│  • Memory functions         • Evaluation                    │
│  • History tracking         • Operator precedence           │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Input
    │
    ▼
┌─────────────────┐
│  CLI receives   │
│  command/expr   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Validate &     │
│  Sanitize       │
└────────┬────────┘
         │
         ├─── Simple command? ──► Execute directly
         │
         └─── Expression? ──┐
                            │
                            ▼
                   ┌─────────────────┐
                   │ ExpressionParser│
                   │   .evaluate()   │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │   Calculator    │
                   │   operations    │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │  Format result  │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │ Display to user │
                   └─────────────────┘
```

## Module Dependencies

```
index.ts
  └── CLI.ts
       ├── Calculator.ts (no dependencies)
       ├── ExpressionParser.ts (no dependencies)
       ├── formatters.ts (no dependencies)
       └── validators.ts (no dependencies)
```

**Key Points:**
- Core modules have NO dependencies (pure logic)
- Utils are standalone (can be used anywhere)
- UI layer depends on Core and Utils
- Clean, unidirectional dependency flow

## File Sizes (Approximate)

| File | Lines | Purpose |
|------|-------|---------|
| Calculator.ts | ~150 | Core calculation logic |
| ExpressionParser.ts | ~130 | Expression parsing |
| CLI.ts | ~140 | User interface |
| formatters.ts | ~60 | Output formatting |
| validators.ts | ~50 | Input validation |
| index.ts | ~10 | Entry point |
| **Tests** | ~400 | Comprehensive test coverage |

## Testing Structure

```
tests/
├── Calculator.test.ts
│   ├── Basic Operations (add, subtract, multiply, divide)
│   ├── Advanced Operations (power, sqrt, percentage)
│   ├── Memory Operations (M+, M-, MR, MC)
│   ├── History
│   └── Reset
│
├── ExpressionParser.test.ts
│   ├── Basic Expressions
│   ├── Operator Precedence
│   ├── Parentheses
│   ├── Negative Numbers
│   ├── Decimal Numbers
│   ├── Complex Expressions
│   └── Error Handling
│
├── formatters.test.ts
│   └── All formatting functions
│
└── validators.test.ts
    └── All validation functions
```

## Key Features by Module

### Calculator.ts
- ✅ Basic arithmetic (4 operations)
- ✅ Advanced math (power, sqrt, percentage)
- ✅ Memory (M+, M-, MR, MC)
- ✅ History tracking with timestamps
- ✅ State management

### ExpressionParser.ts
- ✅ Tokenization
- ✅ Recursive descent parsing
- ✅ Operator precedence
- ✅ Parentheses support
- ✅ Negative numbers
- ✅ Error handling

### CLI.ts
- ✅ Interactive REPL
- ✅ Command processing
- ✅ Help system
- ✅ Memory commands
- ✅ History display

### Utils
- ✅ Number formatting (decimals, commas, scientific)
- ✅ Input validation
- ✅ Expression validation
- ✅ Input sanitization

## Extension Points

The architecture makes it easy to add:

1. **New Operations**: Extend Calculator class
2. **New UI**: Implement new interface using same core
3. **New Formatters**: Add to formatters.ts
4. **New Validators**: Add to validators.ts
5. **Plugins**: Load operations dynamically
6. **API Layer**: Wrap core in REST endpoints
