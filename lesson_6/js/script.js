let openBtn = document.getElementById('open-btn'),
		nameValue = document.getElementsByClassName('name-value')[0],
		budgetValue = document.getElementsByClassName('budget-value')[0],
		goodsValue = document.getElementsByClassName('goods-value')[0],
		itemsValue = document.getElementsByClassName('items-value')[0],
		employersValue = document.getElementsByClassName('employers-value')[0],
		discountValue = document.getElementsByClassName('discount-value')[0],
		isopenValue = document.getElementsByClassName('isopen-value')[0],

		goodsItems = document.getElementsByClassName('goods-item'),
		goodsBtn = document.getElementsByTagName('button')[1],
		budgetBtn = document.getElementsByTagName('button')[2],
		employersBtn = document.getElementsByTagName('button')[3],
		chooseItem = document.querySelector('#items'),
		timeValue = document.querySelector('#time'),
		countBudgetValue = document.querySelector('#budget'),
		hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let sum,
		price,
		items;

openBtn.addEventListener('click', () => {
	sum = prompt('Ваш бюджет?', '');

	while (isNaN(sum) || sum == '' || sum == null) {
		sum = prompt('Ваш бюджет?', '');
	}
	budgetValue.textContent = sum;

	nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
});

goodsBtn.addEventListener('click', () => {
	for ( let i = 0; i < goodsItems.length; i++ ) {

		let a = goodsItems[i].value;

		if ( typeof(a) === 'string' && a != null && a != '' && a.length < 50 ) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener('change', () => {
	items = chooseItem.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	}
	
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if (time < 0) {
		console.log('Такого просто не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			} else {
				console.log('В сутках только 24 часа!');
				mainList.open = false;
				};

	if (mainList.open) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = sum / 30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;

		employersValue.textContent += mainList.employers[i] + ', ';
	}
});




let mainList = {
		budget: sum,
		shopName: name, 
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: []
};

console.log(mainList);

