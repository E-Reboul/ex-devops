import MathService from '../../services/MathService.js';

describe('MathService', () => {
  test('should return the sum of two numbers', () => {
    const service = new MathService();
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });

  test('should throw on invalid input', () => {
    const service = new MathService();
    expect(() => service.add('a', 3)).toThrow('Invalid input');
  });
});
