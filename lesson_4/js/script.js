let sum,
		name,
		time,
		price,
		items;


//Функция для определения первичных данных: бюджет на 1 мес., название магазина, время
function start() {
	
	while (isNaN(sum) || sum == '' || sum == null) {
		sum = prompt('Ваш бюджет?', '');
	}

	name = prompt('Название вашего магазина?', '').toUpperCase();
	time = 15;
}

//start();

let mainList = {
	budget: sum,
	shopName: name, 
	shopGoods: [],
	employees: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for ( let i = 0; i < 5; i++ ) {

			let a = prompt('Какой тип товаров будем продавать?', '');

			if ( typeof(a) === string && a != null && a != '' && a.length < 50 ) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				alert('Данные введены неверно! Попробуйте еще раз');
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}
	},
	calcDailyBudget: function calcDailyBudget() {
		alert(  'Бюджет на 1 день: ' + mainList.budget / 30 );
	},
	calcDiscount: function calcDiscount() {
		if (mainList.discount) {
			price *= 0.8;
		}
	},
	hireEmployees: function hireEmployees() {
	  for (let i = 1; i < 5; i++) {
	    let name = prompt('Имя сотрудника', '');
	    mainList.employees[i] = name;
	  }
	},
	chooseShopItems: function chooseShopItems() {
		while (typeof(items) != 'string' || items == null || items == '') {
			items = prompt('Перечислите через запятую товары', '');
			
		}
		mainList.shopItems = items.split(',');

		let b = prompt('Подождите, еще ', '');
		while (typeof(b) != 'string' || b == null || b == '') {
			b = prompt('Подождите, еще ', '');
		}

		mainList.shopItems.push(b);
		mainList.shopItems.sort();
	},
	showShopItems: function showShopItems() {
		
		document.write('У нас вы можете купить: ');
		mainList.shopItems.forEach(function(elem, index) {
			 document.write((index+1) + ') ' + elem + ', ');
		})
		
	}
};

mainList.chooseShopItems();
mainList.showShopItems();

console.log('Наш магазин включает в себя: ');
for(let key in mainList){
	console.log(key);
}

console.log(mainList);

