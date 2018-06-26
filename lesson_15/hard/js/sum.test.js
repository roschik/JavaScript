const sum = require('./sum');

test('Функция sum() возвращает true', () => {
	expect(sum(12, 2)).toBe(true);
});
