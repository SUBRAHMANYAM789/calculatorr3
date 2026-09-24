import { describe, test, expect } from "bun:test";
import {
  formatNumber,
  formatWithCommas,
  formatScientific,
  truncateDecimals,
  isInteger,
  formatResult
} from "../src/utils/formatters";

describe("Formatters", () => {
  describe("formatNumber", () => {
    test("should format number with default 2 decimals", () => {
      expect(formatNumber(3.14159)).toBe("3.14");
      expect(formatNumber(10)).toBe("10.00");
    });

    test("should format number with custom decimals", () => {
      expect(formatNumber(3.14159, 4)).toBe("3.1416");
      expect(formatNumber(10, 0)).toBe("10");
    });
  });

  describe("formatWithCommas", () => {
    test("should add thousand separators", () => {
      expect(formatWithCommas(1000)).toBe("1,000");
      expect(formatWithCommas(1000000)).toBe("1,000,000");
    });
  });

  describe("formatScientific", () => {
    test("should format large numbers in scientific notation", () => {
      expect(formatScientific(1000000)).toBe("1.0000e+6");
      expect(formatScientific(5000000000)).toBe("5.0000e+9");
    });

    test("should format small numbers in scientific notation", () => {
      expect(formatScientific(0.00001)).toBe("1.0000e-5");
    });

    test("should not format normal numbers", () => {
      expect(formatScientific(100)).toBe("100");
      expect(formatScientific(999999)).toBe("999999");
    });
  });

  describe("truncateDecimals", () => {
    test("should truncate long decimals", () => {
      expect(truncateDecimals(3.14159265359, 2)).toBe(3.14);
      expect(truncateDecimals(1.23456789, 4)).toBe(1.2346);
    });
  });

  describe("isInteger", () => {
    test("should identify integers", () => {
      expect(isInteger(5)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-10)).toBe(true);
    });

    test("should identify non-integers", () => {
      expect(isInteger(5.5)).toBe(false);
      expect(isInteger(0.1)).toBe(false);
    });
  });

  describe("formatResult", () => {
    test("should format integer results with commas", () => {
      expect(formatResult(1000)).toBe("1,000");
    });

    test("should format decimal results", () => {
      const result = formatResult(3.14159);
      expect(result).toContain("3.14");
    });

    test("should format large numbers in scientific notation", () => {
      expect(formatResult(10000000)).toBe("1.0000e+7");
    });
  });
});
