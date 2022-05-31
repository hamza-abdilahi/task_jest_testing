const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 600000;
    actual = sum(400000, 200000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -65;
    actual = sum(-60, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 98;
    actual = sum(0, 98);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
    test('subtracting two numbers', () => {
      expected = 9;
      actual = subtract(10, 1);
      expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
    test('multiplying two numbers', () => {
      expected = 44;
      actual = multiply (11, 4);
      expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('dividing two numbers', () => {
    expected = 5;
    actual = divide (25, 5);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('dividing with the remainder ', () => {
    expected = 3;
    actual =  modulus(13, 5);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('finding out the even number', () => {
    expected = true;
    actual = even(2, 2);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {
  test('finding the odd number', () => {
    expected = true;
    actual = odd(11);
    expect(actual).toBeTruthy();
  });
});
