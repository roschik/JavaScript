describe('sum', ()=> {
	it('Возвращает тип данных True', () => {
		assert.isTrue(sum(2,2));
	});
});

describe('num', ()=> {
	it('Переменная num равна 5', () => {
		assert.equal(num, 5);
	});
});

describe('each', () => {
	it('Возращает тип данных Array', () => {
		assert.typeOf(each(array, myFunc), 'array');
	});
	it('Возвращает [8,7,6,5,4]', () => {
		assert.deepEqual(each(array, myFunc), [ 8, 7, 6, 5, 4 ])
	})
	it('Длина значения Each равна 2', () => {
		assert.lengthOf(each, 2);
	});
});