import MathService from '../../services/MathService.js';

describe('MathService', () => {

    const service = new MathService();

    test('should throw on invalid input', () => {
        expect(() => service.add('a', 3)).toThrow('Invalid input');
      });

    test('should return the sum of two numbers', () => {
        const result = service.add(2, 3);
        expect(result).toBe(5);
    });

    test('should return the difference of two numbers', () => {
        const result = service.substract(5, 3);
        expect(result).toBe(2);
    });

    test('should return the product of two numbers', () => {
        const result = service.multiply(2, 3);
        expect(result).toBe(6);
    });

    test('should return the quotient of two numbers', () => {
        const result = service.divide(6, 3);
        expect(result).toBe(2);
    });

    test('should return the percentage of two numbers', () => {
        const result = service.percentage(200, 10);
        expect(result).toBe(20);
    });
  
});
