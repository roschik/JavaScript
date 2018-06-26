describe('sum', ()=> {
	it('Возвращает тип данных True', () => {
		assert.typeOf(sum(2,2), 'boolean')
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
	it('Длина возвращаемого значения Each равна 5', () => {
		assert.lengthOf(each(array, myFunc), 5);
	});
});