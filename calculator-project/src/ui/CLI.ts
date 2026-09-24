/**
 * Command Line Interface for the Calculator
 */
import { Calculator } from '../core/Calculator';
import { ExpressionParser } from '../core/ExpressionParser';
import { formatResult } from '../utils/formatters';
import { isValidExpression, sanitizeInput } from '../utils/validators';

export class CLI {
  private calculator: Calculator;
  private parser: ExpressionParser;

  constructor() {
    this.calculator = new Calculator();
    this.parser = new ExpressionParser();
  }

  /**
   * Display welcome message
   */
  showWelcome(): void {
    console.log('╔════════════════════════════════════════╗');
    console.log('║     CALCULATOR APPLICATION v1.0        ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('');
    console.log('Available commands:');
    console.log('  - Enter any expression: 2 + 2, 5 * (3 + 2), etc.');
    console.log('  - history    : Show calculation history');
    console.log('  - clear      : Clear history');
    console.log('  - memory     : Show memory value');
    console.log('  - m+ [value] : Add to memory');
    console.log('  - m- [value] : Subtract from memory');
    console.log('  - mc         : Clear memory');
    console.log('  - help       : Show this help');
    console.log('  - exit       : Exit calculator');
    console.log('');
  }

  /**
   * Process user command
   */
  processCommand(input: string): string {
    input = input.trim().toLowerCase();

    // Handle special commands
    if (input === 'exit' || input === 'quit') {
      return 'EXIT';
    }

    if (input === 'help') {
      this.showWelcome();
      return 'Help displayed';
    }

    if (input === 'history') {
      const history = this.calculator.getHistory();
      if (history.length === 0) {
        return 'No history available';
      }
      return '\n' + history.join('\n');
    }

    if (input === 'clear') {
      this.calculator.clearHistory();
      return 'History cleared';
    }

    if (input === 'memory') {
      return `Memory: ${formatResult(this.calculator.memoryRecall())}`;
    }

    if (input === 'mc') {
      this.calculator.memoryClear();
      return 'Memory cleared';
    }

    if (input.startsWith('m+')) {
      const value = parseFloat(input.substring(2).trim());
      if (isNaN(value)) {
        return 'Error: Invalid value for M+';
      }
      this.calculator.memoryAdd(value);
      return `Added ${value} to memory. Memory: ${formatResult(this.calculator.memoryRecall())}`;
    }

    if (input.startsWith('m-')) {
      const value = parseFloat(input.substring(2).trim());
      if (isNaN(value)) {
        return 'Error: Invalid value for M-';
      }
      this.calculator.memorySubtract(value);
      return `Subtracted ${value} from memory. Memory: ${formatResult(this.calculator.memoryRecall())}`;
    }

    // Try to evaluate as expression
    try {
      const sanitized = sanitizeInput(input);
      
      if (!isValidExpression(sanitized)) {
        return 'Error: Invalid expression';
      }

      const result = this.parser.evaluate(sanitized);
      this.calculator.setCurrentValue(result);
      
      return `= ${formatResult(result)}`;
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }

  /**
   * Run interactive mode
   */
  async runInteractive(): Promise<void> {
    this.showWelcome();

    // Read from stdin
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'calc> '
    });

    rl.prompt();

    rl.on('line', (line: string) => {
      const result = this.processCommand(line);
      
      if (result === 'EXIT') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      console.log(result);
      rl.prompt();
    });

    rl.on('close', () => {
      process.exit(0);
    });
  }
}
