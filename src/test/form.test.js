const form = require('../classes/custom_form');
test('n is 1', () => {
  expect(form(1)).toBe(NaN);
});

test('n is 2', () => {
  expect(form(2)).toBe(NaN);
});

test('n is 3', () => {
  expect(form(3)).toBe(39);
});

test('n is 4', () => {
  expect(form(4)).toBe(102);
});

test('n is 5', () => {
  expect(form(5)).toBe(95);
});

test('n is 6', () => {
  expect(form(6)).toBe(115);
});

test('n is 7', () => {
  expect(form(7)).toBe(121.8);
});

test('n is 8', () => {
  expect(form(8)).toBe(108.5);
});

test('n is 9', () => {
  expect(form(9)).toBe(102.46153846153847);
});

test('n is 10', () => {
  expect(form(10)).toBe(87.85714285714286);
});