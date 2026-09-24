/**
 * Expression Parser
 * Parses and evaluates mathematical expressions
 */
export class ExpressionParser {
  /**
   * Evaluate a mathematical expression string
   * Supports: +, -, *, /, ^, (), and numbers
   */
  evaluate(expression: string): number {
    // Remove whitespace
    expression = expression.replace(/\s+/g, '');
    
    if (!expression) {
      throw new Error("Empty expression");
    }

    return this.parseExpression(expression);
  }

  private parseExpression(expr: string): number {
    // Handle addition and subtraction (lowest precedence)
    const tokens = this.tokenize(expr);
    return this.evaluateTokens(tokens);
  }

  private tokenize(expr: string): string[] {
    const tokens: string[] = [];
    let current = '';
    
    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      
      if (char >= '0' && char <= '9' || char === '.') {
        current += char;
      } else if (char === '(' || char === ')' || char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
        if (current) {
          tokens.push(current);
          current = '';
        }
        tokens.push(char);
      } else {
        throw new Error(`Invalid character: ${char}`);
      }
    }
    
    if (current) {
      tokens.push(current);
    }
    
    return tokens;
  }

  private evaluateTokens(tokens: string[]): number {
    // Simple recursive descent parser
    let index = 0;

    const parseNumber = (): number => {
      const token = tokens[index];
      
      if (token === '(') {
        index++; // skip '('
        const result = parseAddSub();
        index++; // skip ')'
        return result;
      }
      
      if (token === '-') {
        index++;
        return -parseNumber();
      }
      
      const num = parseFloat(token);
      if (isNaN(num)) {
        throw new Error(`Invalid number: ${token}`);
      }
      index++;
      return num;
    };

    const parsePower = (): number => {
      let left = parseNumber();
      
      while (index < tokens.length && tokens[index] === '^') {
        index++; // skip '^'
        const right = parseNumber();
        left = Math.pow(left, right);
      }
      
      return left;
    };

    const parseMulDiv = (): number => {
      let left = parsePower();
      
      while (index < tokens.length && (tokens[index] === '*' || tokens[index] === '/')) {
        const op = tokens[index];
        index++;
        const right = parsePower();
        
        if (op === '*') {
          left *= right;
        } else {
          if (right === 0) {
            throw new Error("Division by zero");
          }
          left /= right;
        }
      }
      
      return left;
    };

    const parseAddSub = (): number => {
      let left = parseMulDiv();
      
      while (index < tokens.length && (tokens[index] === '+' || tokens[index] === '-')) {
        const op = tokens[index];
        index++;
        const right = parseMulDiv();
        
        if (op === '+') {
          left += right;
        } else {
          left -= right;
        }
      }
      
      return left;
    };

    return parseAddSub();
  }
}
