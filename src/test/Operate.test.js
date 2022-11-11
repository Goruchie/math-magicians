import operate from '../logic/operate';

test('Sum 1, 2 result will be 2', () => {
  const result = operate(1, 2, 'x');
  expect(result).toBe('2');
});

test('Should return \'can not divide by 0 message\'', () => {
  const result = operate(2, 0, '÷');
  expect(result).toBe("Can't divide by 0.");
});

test('Should display an invalid operation message when operation out of the calculator operation is used',
  () => {
    expect(() => operate(67, 90, '/')).toThrow('Unknown operation \'/\'');
  });

test('10 ÷ 2 result will be 5', () => {
  const result = operate(10, 2, '÷');
  expect(result).toBe('5');
});

test('10 + 5 result will be 15', () => {
  const result = operate(10, 5, '+');
  expect(result).toBe('15');
});

test('50 - 10 result will be 40', () => {
  const result = operate(50, 10, '-');
  expect(result).toBe('40');
});
