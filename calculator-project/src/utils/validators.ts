/**
 * Input validation utilities
 */

/**
 * Validate if a string is a valid number
 */
export function isValidNumber(input: string): boolean {
  const num = parseFloat(input);
  return !isNaN(num) && isFinite(num);
}

/**
 * Validate if a string is a valid mathematical expression
 */
export function isValidExpression(expression: string): boolean {
  // Check for balanced parentheses
  let balance = 0;
  for (const char of expression) {
    if (char === '(') balance++;
    if (char === ')') balance--;
    if (balance < 0) return false;
  }
  
  if (balance !== 0) return false;
  
  // Check for valid characters
  const validChars = /^[0-9+\-*/^().\s]+$/;
  return validChars.test(expression);
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[^\d+\-*/^().\s]/g, '');
}

/**
 * Check if number is within safe range
 */
export function isSafeNumber(num: number): boolean {
  return num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER;
}
