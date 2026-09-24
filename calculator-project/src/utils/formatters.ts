/**
 * Utility functions for formatting numbers and output
 */

/**
 * Format a number with specified decimal places
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return num.toFixed(decimals);
}

/**
 * Format a number with thousands separators
 */
export function formatWithCommas(num: number): string {
  return num.toLocaleString('en-US');
}

/**
 * Format a number in scientific notation if too large/small
 */
export function formatScientific(num: number, threshold: number = 1e6): string {
  if (Math.abs(num) >= threshold || (Math.abs(num) < 0.0001 && num !== 0)) {
    return num.toExponential(4);
  }
  return num.toString();
}

/**
 * Truncate long decimal numbers
 */
export function truncateDecimals(num: number, maxDecimals: number = 10): number {
  const multiplier = Math.pow(10, maxDecimals);
  return Math.round(num * multiplier) / multiplier;
}

/**
 * Check if a number is an integer
 */
export function isInteger(num: number): boolean {
  return Number.isInteger(num);
}

/**
 * Format result for display
 */
export function formatResult(num: number): string {
  const truncated = truncateDecimals(num);
  
  if (isInteger(truncated)) {
    return formatWithCommas(truncated);
  }
  
  return formatScientific(truncated);
}
