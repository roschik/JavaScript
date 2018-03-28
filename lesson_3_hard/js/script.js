let str = 'урок-3-был слишком легким';
//Делаем строку с большой буквы
str = str[0].toUpperCase() + str.slice(1);
console.log(str);

//Заменяем тире на пробелы
str = str.replace(/-/g, ' ');
console.log(str);

// Вырезаем слово “легким”, заменяем 2 последние буквы на “о”
str = str.slice(-6);
str = str.slice(0, 4) + 'o';
console.log(str);

// Вывести в консоль квадратный корень из суммы кубов элементов массива
let arr = [20, 33, 1, 'Человек', 2, 3];
let result = 0;

for (let i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i]) && arr[i] !== '' && arr[i] !== null) {
		let x = (arr[i])**3;
		result += x;
	}
}

console.log('Квадратный корень из суммы кубов элементов массива равен: ' + Math.sqrt(result));
