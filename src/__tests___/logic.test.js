import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('Testing calculate function', () => {
  test('Additions', () => {
    const buttonName = '+';
    const obj = {
      total: '-7',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('2');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });
  test('Additions', () => {
    const buttonName = 'AC';
    const obj = {
      total: '-7',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBeNull();
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBeNull();
  });
  test('Multiplication', () => {
    const buttonName = 'x';
    const obj = {
      total: '2',
      next: '4',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('8');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });
  test('Substraction', () => {
    const buttonName = '-';
    const obj = {
      total: '10',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('1');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });
  test('Division', () => {
    const buttonName = '÷';
    const obj = {
      total: '10',
      next: '5',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('2');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });
  test('0 tests', () => {
    const buttonName = '0';
    const obj = {
      total: '0',
      next: '0',
      operation: '+',
    };
    expect(calculate(obj, buttonName).total).toBeUndefined();
    expect(calculate(obj, buttonName).next).toBeUndefined();
    expect(calculate(obj, buttonName).operation).toBeUndefined();
  });
  test('0 tests', () => {
    const buttonName = '3';
    const obj = {
      total: '2',
      next: '0',
    };
    expect(calculate(obj, buttonName).next).toBe(buttonName);
  });
  test('. test', () => {
    const buttonName = '.';
    const obj = {
      next: '2',
      operation: '.',
    };
    expect(calculate(obj, buttonName).next).toBe('2.');
  });
  test('= tests', () => {
    const buttonName = '=';
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, buttonName).total).toBe('5');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBeNull();
  });
  test('+/- tests', () => {
    const buttonName = '+/-';
    const obj = {

      next: '2',

    };
    expect(calculate(obj, buttonName).next).toBe('-2');
  });
});

describe('Testing operate function', () => {
  test('Addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('Multiplication', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('Substraction', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  test('division', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
});
