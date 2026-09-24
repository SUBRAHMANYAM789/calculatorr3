import { describe, test, expect, beforeEach } from "bun:test";
import { ExpressionParser } from "../src/core/ExpressionParser";

describe("ExpressionParser", () => {
  let parser: ExpressionParser;

  beforeEach(() => {
    parser = new ExpressionParser();
  });

  describe("Basic Expressions", () => {
    test("should evaluate simple addition", () => {
      expect(parser.evaluate("2 + 3")).toBe(5);
      expect(parser.evaluate("10 + 20")).toBe(30);
    });

    test("should evaluate simple subtraction", () => {
      expect(parser.evaluate("5 - 3")).toBe(2);
      expect(parser.evaluate("10 - 20")).toBe(-10);
    });

    test("should evaluate simple multiplication", () => {
      expect(parser.evaluate("2 * 3")).toBe(6);
      expect(parser.evaluate("5 * 5")).toBe(25);
    });

    test("should evaluate simple division", () => {
      expect(parser.evaluate("6 / 2")).toBe(3);
      expect(parser.evaluate("10 / 4")).toBe(2.5);
    });
  });

  describe("Operator Precedence", () => {
    test("should respect multiplication before addition", () => {
      expect(parser.evaluate("2 + 3 * 4")).toBe(14);
      expect(parser.evaluate("10 - 2 * 3")).toBe(4);
    });

    test("should respect division before subtraction", () => {
      expect(parser.evaluate("10 - 6 / 2")).toBe(7);
    });

    test("should handle power operator", () => {
      expect(parser.evaluate("2 ^ 3")).toBe(8);
      expect(parser.evaluate("5 ^ 2")).toBe(25);
    });

    test("should respect power precedence", () => {
      expect(parser.evaluate("2 * 3 ^ 2")).toBe(18);
    });
  });

  describe("Parentheses", () => {
    test("should evaluate expressions with parentheses", () => {
      expect(parser.evaluate("(2 + 3) * 4")).toBe(20);
      expect(parser.evaluate("2 * (3 + 4)")).toBe(14);
    });

    test("should handle nested parentheses", () => {
      expect(parser.evaluate("((2 + 3) * 4) - 5")).toBe(15);
      expect(parser.evaluate("2 * (3 + (4 * 5))")).toBe(46);
    });
  });

  describe("Negative Numbers", () => {
    test("should handle negative numbers", () => {
      expect(parser.evaluate("-5 + 3")).toBe(-2);
      expect(parser.evaluate("10 + -5")).toBe(5);
    });

    test("should handle negative in parentheses", () => {
      expect(parser.evaluate("(-5) * 2")).toBe(-10);
    });
  });

  describe("Decimal Numbers", () => {
    test("should handle decimal numbers", () => {
      expect(parser.evaluate("1.5 + 2.5")).toBe(4);
      expect(parser.evaluate("0.1 + 0.2")).toBeCloseTo(0.3);
    });
  });

  describe("Complex Expressions", () => {
    test("should evaluate complex expressions", () => {
      expect(parser.evaluate("2 + 3 * 4 - 5 / 2")).toBe(11.5);
      expect(parser.evaluate("(10 + 5) * 2 - 8 / 4")).toBe(28);
    });
  });

  describe("Error Handling", () => {
    test("should throw error for empty expression", () => {
      expect(() => parser.evaluate("")).toThrow("Empty expression");
    });

    test("should throw error for division by zero", () => {
      expect(() => parser.evaluate("5 / 0")).toThrow("Division by zero");
    });

    test("should throw error for invalid characters", () => {
      expect(() => parser.evaluate("2 + a")).toThrow("Invalid");
    });
  });
});
