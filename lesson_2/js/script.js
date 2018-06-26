let sum = prompt('Ваш бюджет?', '');
let name = prompt('Название вашего магазина?', '');
let time = 15;

let mainList = {
	budget: sum,
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false
};

for ( let i = 0; i < 5; i++ ) {

	let a = prompt('Какой тип товаров будем продавать?', '');

	if ( typeof(a) === 'string' && a !== null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert('Данные введены неверно! Попробуйте еще раз');
		i--;
	}

}

/*
let i = 0;

while (i < 5) {

	let a = prompt('Какой тип товаров будем продавать?', '');

	if ( typeof(a) === 'string' && a !== null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Данные введены неверно! Попробуйте еще раз');
	}

}*/

/*
do {
	let a = prompt('Какой тип товаров будем продавать?', '');

	if ( typeof(a) === 'string' && a !== null && a != '' && a.length < 50 ) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Данные введены неверно! Попробуйте еще раз');
	}
} while (i < 5);
*/

if (time < 0) {
	console.log('Такого просто не может быть!');
} else if (time > 8 && time < 20) {
	console.log('Время работать!')
} else if (time < 24) {
	console.log('Уже слишком поздно!')
} else {
	console.log('В сутках только 24 часа!')
};

alert(  'Бюджет на 1 день: ' + mainList.budget / 30 );

console.log(mainList);