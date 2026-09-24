# Calculator Project

A modern, feature-rich calculator application with a clean architecture.

## Project Structure

```
calculator-project/
├── src/
│   ├── core/           # Core calculation logic
│   ├── ui/             # User interface components
│   ├── utils/          # Utility functions
│   └── index.ts        # Application entry point
├── tests/              # Test files
├── docs/               # Documentation
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Features

- Basic arithmetic operations (add, subtract, multiply, divide)
- Advanced operations (power, square root, percentage)
- Memory functions (M+, M-, MR, MC)
- History tracking
- Error handling
- Extensible architecture

## Getting Started

```bash
# Install dependencies
bun install

# Run the calculator
bun run src/index.ts

# Run tests
bun test
```

## Architecture

The project follows a clean architecture pattern:
- **Core**: Pure calculation logic, no dependencies
- **UI**: Presentation layer (can be CLI, Web, or GUI)
- **Utils**: Helper functions and utilities
- **Tests**: Comprehensive test coverage
