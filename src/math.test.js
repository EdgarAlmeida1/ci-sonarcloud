const math = require('./index');
const {sum, minus, multi, pow, max, min} = math;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtract 5 - 2 to equal 3', () => {
    expect(minus(5, 2)).toBe(3);
});

test('multiplicate 5 * 3 to equal 15', () => {
    expect(multi(5, 3)).toBe(15);
});

test('power 2^8 to equal 256', () => {
    expect(pow(2, 8)).toBe(256);
});

test('max between 15 and 16', () => {
    expect(max(15, 16)).toBe(16);
    expect(max(15, 14)).toBe(15);
});

test('min between 15 and 16', () => {
    expect(min(15, 16)).toBe(15);
    expect(min(17, 16)).toBe(16);
});