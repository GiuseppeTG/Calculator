import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Testing calculate function', () => {
  test('Additions', () => {
    const buttonName = '+';
    const obj = {
      total: '-7',
      next: '9',
      operation: '+',
    };
    expect(calculate(obj, buttonName).total).toBe('2');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });
});

describe('Testing operate function', () => {
  test('Plus', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
});
