let sum,
		name,
		time,
		price;


//Функция для определения первичных данных: бюджет на 1 мес., название магазина, время
function start() {
	
	while (isNaN(sum) || sum == '' || sum == null) {
		sum = prompt('Ваш бюджет?', '');
	}

	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 15;
}

start();

let mainList = {
	budget: sum,
	shopName: name, 
	shopGoods: [],
	employees: {},
	open: false,
	discount: false
};

//Функция для определения типов товара
function chooseGoods() {
	for ( let i = 0; i < 5; i++ ) {

		let a = prompt('Какой тип товаров будем продавать?', '');

		if ( typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			alert('Данные введены неверно! Попробуйте еще раз');
			i--;
		}
	}
}

chooseGoods();

//Функция определения рабочего времени
function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!')
		} else if (time < 24) {
			console.log('Уже слишком поздно!')
			} else {
				console.log('В сутках только 24 часа!')
				}
}

workTime(1);

//Функция расчета ежедневного бюджета
function calcDailyBudget() {
	alert(  'Бюджет на 1 день: ' + mainList.budget / 30 );
}

calcDailyBudget();

//Функция расчета дисконта
function calcDiscount() {
	if (mainList.discount) {
		price *= 0.8;
	}
}

calcDiscount();

//Функция найма сотрудников
function hireEmployees() {
  for (let i = 1; i < 5; i++) {
    let name = prompt('Имя сотрудника', '');
    mainList.employees[i] = name;
  }
}

hireEmployees();

console.log(mainList);