import demo from '../app';

test('тестируем возвращенное значение из функции', () => {
  const testValue = 'testValue';
  const result = demo(testValue);
  expect(result).toBe(testValue);
});
