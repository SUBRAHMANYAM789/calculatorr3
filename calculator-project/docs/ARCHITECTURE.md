# Calculator Project Architecture

## Overview

This calculator application follows a clean, layered architecture that separates concerns and makes the codebase maintainable and testable.

## Architecture Layers

```
┌─────────────────────────────────────┐
│         UI Layer (CLI)              │
│  - User interaction                 │
│  - Command processing               │
│  - Display formatting               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       Utilities Layer               │
│  - Formatters                       │
│  - Validators                       │
│  - Helper functions                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         Core Layer                  │
│  - Calculator (business logic)      │
│  - ExpressionParser                 │
│  - Pure functions, no dependencies  │
└─────────────────────────────────────┘
```

## Design Principles

### 1. Separation of Concerns
- **Core**: Contains pure business logic with no external dependencies
- **Utils**: Reusable utility functions
- **UI**: Handles all user interaction and presentation

### 2. Single Responsibility
Each class has one clear purpose:
- `Calculator`: Performs mathematical operations
- `ExpressionParser`: Parses and evaluates expressions
- `CLI`: Handles command-line interface
- Formatters: Format output
- Validators: Validate input

### 3. Testability
- Pure functions in core layer are easy to test
- No side effects in calculation logic
- Dependency injection ready

### 4. Extensibility
Easy to add:
- New operations (extend Calculator class)
- New UI types (Web, GUI) by implementing same interface
- New formatters or validators

## Core Components

### Calculator Class
```typescript
class Calculator {
  // Basic operations
  add(a, b): number
  subtract(a, b): number
  multiply(a, b): number
  divide(a, b): number
  
  // Advanced operations
  power(a, b): number
  sqrt(a): number
  percentage(value, percent): number
  
  // Memory operations
  memoryAdd(value): void
  memorySubtract(value): void
  memoryRecall(): number
  memoryClear(): void
  
  // History
  getHistory(): string[]
  clearHistory(): void
}
```

### ExpressionParser Class
Implements a recursive descent parser that:
1. Tokenizes the input string
2. Parses according to operator precedence
3. Evaluates the expression tree
4. Returns the result

Operator precedence (highest to lowest):
1. Parentheses `()`
2. Power `^`
3. Multiplication `*`, Division `/`
4. Addition `+`, Subtraction `-`

## Data Flow

```
User Input
    ↓
CLI.processCommand()
    ↓
Validators.sanitizeInput()
    ↓
ExpressionParser.evaluate()
    ↓
Calculator operations
    ↓
Formatters.formatResult()
    ↓
Display to User
```

## Error Handling

Errors are handled at multiple levels:
1. **Input validation**: Catch invalid input early
2. **Parser errors**: Invalid syntax or expressions
3. **Calculation errors**: Division by zero, invalid operations
4. **Display errors**: Format errors gracefully for users

## Testing Strategy

### Unit Tests
- Test each function in isolation
- Mock dependencies where needed
- Cover edge cases and error conditions

### Test Coverage
- Core: 100% coverage (pure logic)
- Utils: 100% coverage (pure functions)
- UI: Integration tests for command processing

## Future Enhancements

### Potential Features
1. **Web UI**: Add browser-based interface
2. **Scientific Functions**: sin, cos, tan, log, etc.
3. **Variables**: Store and use named variables
4. **Functions**: Define custom functions
5. **Unit Conversion**: Convert between units
6. **Graphing**: Plot mathematical functions
7. **History Export**: Save history to file
8. **Themes**: Customizable UI themes

### Architectural Improvements
1. **Plugin System**: Load operations dynamically
2. **Configuration**: User preferences and settings
3. **Localization**: Multi-language support
4. **API Layer**: REST API for remote calculations
5. **State Management**: More sophisticated state handling

## Performance Considerations

- Expression parsing is O(n) where n is expression length
- Memory operations are O(1)
- History storage grows linearly with operations
- Consider limiting history size for long-running sessions

## Security Considerations

- Input sanitization prevents code injection
- Number range validation prevents overflow
- Expression validation prevents malformed input
- No eval() or dynamic code execution

## Deployment

The application can be deployed as:
1. **CLI tool**: Direct execution via bun
2. **NPM package**: Installable globally
3. **Docker container**: Isolated environment
4. **Web service**: API endpoint
5. **Desktop app**: Electron wrapper
