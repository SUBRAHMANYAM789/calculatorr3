import { describe, test, expect } from "bun:test";
import {
  isValidNumber,
  isValidExpression,
  sanitizeInput,
  isSafeNumber
} from "../src/utils/validators";

describe("Validators", () => {
  describe("isValidNumber", () => {
    test("should validate valid numbers", () => {
      expect(isValidNumber("123")).toBe(true);
      expect(isValidNumber("3.14")).toBe(true);
      expect(isValidNumber("-5")).toBe(true);
      expect(isValidNumber("0")).toBe(true);
    });

    test("should reject invalid numbers", () => {
      expect(isValidNumber("abc")).toBe(false);
      expect(isValidNumber("12a3")).toBe(false);
      expect(isValidNumber("")).toBe(false);
    });

    test("should reject infinity", () => {
      expect(isValidNumber("Infinity")).toBe(false);
    });
  });

  describe("isValidExpression", () => {
    test("should validate valid expressions", () => {
      expect(isValidExpression("2 + 3")).toBe(true);
      expect(isValidExpression("(5 * 2) - 3")).toBe(true);
      expect(isValidExpression("10 / 2")).toBe(true);
    });

    test("should reject unbalanced parentheses", () => {
      expect(isValidExpression("(2 + 3")).toBe(false);
      expect(isValidExpression("2 + 3)")).toBe(false);
      expect(isValidExpression("((2 + 3)")).toBe(false);
    });

    test("should reject invalid characters", () => {
      expect(isValidExpression("2 + a")).toBe(false);
      expect(isValidExpression("2 & 3")).toBe(false);
    });
  });

  describe("sanitizeInput", () => {
    test("should remove invalid characters", () => {
      expect(sanitizeInput("2 + 3")).toBe("2 + 3");
      expect(sanitizeInput("2 + 3!")).toBe("2 + 3");
      expect(sanitizeInput("abc123")).toBe("123");
    });

    test("should trim whitespace", () => {
      expect(sanitizeInput("  2 + 3  ")).toBe("2 + 3");
    });
  });

  describe("isSafeNumber", () => {
    test("should validate safe numbers", () => {
      expect(isSafeNumber(100)).toBe(true);
      expect(isSafeNumber(-100)).toBe(true);
      expect(isSafeNumber(0)).toBe(true);
    });

    test("should reject unsafe numbers", () => {
      expect(isSafeNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
      expect(isSafeNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
    });
  });
});
