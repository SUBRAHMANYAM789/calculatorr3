/**
 * Core Calculator class
 * Handles all calculation logic with no external dependencies
 */
export class Calculator {
  private currentValue: number = 0;
  private memory: number = 0;
  private history: string[] = [];

  /**
   * Add two numbers
   */
  add(a: number, b: number): number {
    const result = a + b;
    this.recordHistory(`${a} + ${b} = ${result}`);
    return result;
  }

  /**
   * Subtract b from a
   */
  subtract(a: number, b: number): number {
    const result = a - b;
    this.recordHistory(`${a} - ${b} = ${result}`);
    return result;
  }

  /**
   * Multiply two numbers
   */
  multiply(a: number, b: number): number {
    const result = a * b;
    this.recordHistory(`${a} × ${b} = ${result}`);
    return result;
  }

  /**
   * Divide a by b
   * @throws Error if dividing by zero
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    const result = a / b;
    this.recordHistory(`${a} ÷ ${b} = ${result}`);
    return result;
  }

  /**
   * Raise a to the power of b
   */
  power(a: number, b: number): number {
    const result = Math.pow(a, b);
    this.recordHistory(`${a}^${b} = ${result}`);
    return result;
  }

  /**
   * Calculate square root
   * @throws Error if number is negative
   */
  sqrt(a: number): number {
    if (a < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    const result = Math.sqrt(a);
    this.recordHistory(`√${a} = ${result}`);
    return result;
  }

  /**
   * Calculate percentage
   */
  percentage(value: number, percent: number): number {
    const result = (value * percent) / 100;
    this.recordHistory(`${percent}% of ${value} = ${result}`);
    return result;
  }

  /**
   * Memory operations
   */
  memoryAdd(value: number): void {
    this.memory += value;
    this.recordHistory(`M+ ${value} (Memory: ${this.memory})`);
  }

  memorySubtract(value: number): void {
    this.memory -= value;
    this.recordHistory(`M- ${value} (Memory: ${this.memory})`);
  }

  memoryRecall(): number {
    return this.memory;
  }

  memoryClear(): void {
    this.memory = 0;
    this.recordHistory("Memory cleared");
  }

  /**
   * Get calculation history
   */
  getHistory(): string[] {
    return [...this.history];
  }

  /**
   * Clear history
   */
  clearHistory(): void {
    this.history = [];
  }

  /**
   * Record operation in history
   */
  private recordHistory(operation: string): void {
    this.history.push(`[${new Date().toISOString()}] ${operation}`);
  }

  /**
   * Get current value
   */
  getCurrentValue(): number {
    return this.currentValue;
  }

  /**
   * Set current value
   */
  setCurrentValue(value: number): void {
    this.currentValue = value;
  }

  /**
   * Reset calculator
   */
  reset(): void {
    this.currentValue = 0;
    this.memory = 0;
    this.history = [];
  }
}
