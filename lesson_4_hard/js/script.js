let arr = [];

//Спрашиваем у пользователя число массивов
function askNumber() {
	let num;
	while (isNaN(num) || num == '' || num == null || num <= 0) {
		num = +prompt('Сколько массивов включить в наш массив?', '');
	}
	return num;
}

//Определяем рандомное число в промежутке от min до max
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Заполняем массив
function fillArray() {
	let sumArrays = askNumber();

	for (let i = 0; i < sumArrays; i++) {
		let sumElements = getRandomNum(1, 5);
		arr[i] = [];

		for (let j = 0; j < sumElements; j++) {
			arr[i][j] = getRandomNum(0, 100);
		}

	}
}
fillArray();
console.log(arr);

//Считаем сумму элементов массива
function calcSumElements(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			result += array[i][j];
		}
	}
	return result;
}

alert('Сумма элементов массива: ' + calcSumElements(arr));