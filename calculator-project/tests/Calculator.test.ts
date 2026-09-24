import { describe, test, expect, beforeEach } from "bun:test";
import { Calculator } from "../src/core/Calculator";

describe("Calculator", () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe("Basic Operations", () => {
    test("should add two numbers", () => {
      expect(calc.add(2, 3)).toBe(5);
      expect(calc.add(-1, 1)).toBe(0);
      expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("should subtract two numbers", () => {
      expect(calc.subtract(5, 3)).toBe(2);
      expect(calc.subtract(0, 5)).toBe(-5);
      expect(calc.subtract(-5, -3)).toBe(-2);
    });

    test("should multiply two numbers", () => {
      expect(calc.multiply(2, 3)).toBe(6);
      expect(calc.multiply(-2, 3)).toBe(-6);
      expect(calc.multiply(0, 100)).toBe(0);
    });

    test("should divide two numbers", () => {
      expect(calc.divide(6, 2)).toBe(3);
      expect(calc.divide(5, 2)).toBe(2.5);
      expect(calc.divide(-10, 2)).toBe(-5);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => calc.divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });

  describe("Advanced Operations", () => {
    test("should calculate power", () => {
      expect(calc.power(2, 3)).toBe(8);
      expect(calc.power(5, 0)).toBe(1);
      expect(calc.power(2, -1)).toBe(0.5);
    });

    test("should calculate square root", () => {
      expect(calc.sqrt(4)).toBe(2);
      expect(calc.sqrt(9)).toBe(3);
      expect(calc.sqrt(0)).toBe(0);
    });

    test("should throw error for negative square root", () => {
      expect(() => calc.sqrt(-1)).toThrow("Cannot calculate square root of negative number");
    });

    test("should calculate percentage", () => {
      expect(calc.percentage(100, 50)).toBe(50);
      expect(calc.percentage(200, 25)).toBe(50);
      expect(calc.percentage(80, 10)).toBe(8);
    });
  });

  describe("Memory Operations", () => {
    test("should add to memory", () => {
      calc.memoryAdd(10);
      expect(calc.memoryRecall()).toBe(10);
      calc.memoryAdd(5);
      expect(calc.memoryRecall()).toBe(15);
    });

    test("should subtract from memory", () => {
      calc.memoryAdd(20);
      calc.memorySubtract(5);
      expect(calc.memoryRecall()).toBe(15);
    });

    test("should clear memory", () => {
      calc.memoryAdd(100);
      calc.memoryClear();
      expect(calc.memoryRecall()).toBe(0);
    });
  });

  describe("History", () => {
    test("should record operations in history", () => {
      calc.add(2, 3);
      calc.multiply(4, 5);
      const history = calc.getHistory();
      expect(history.length).toBe(2);
      expect(history[0]).toContain("2 + 3 = 5");
      expect(history[1]).toContain("4 × 5 = 20");
    });

    test("should clear history", () => {
      calc.add(1, 1);
      calc.clearHistory();
      expect(calc.getHistory().length).toBe(0);
    });
  });

  describe("Reset", () => {
    test("should reset calculator state", () => {
      calc.add(5, 5);
      calc.memoryAdd(10);
      calc.reset();
      expect(calc.getCurrentValue()).toBe(0);
      expect(calc.memoryRecall()).toBe(0);
      expect(calc.getHistory().length).toBe(0);
    });
  });
});
