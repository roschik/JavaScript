let sum = prompt('Ваш бюджет?', '');
let name = prompt('Название вашего магазина?', '');

let mainList = {
	budget: sum,
	shopName: name, 
	shopGoods: [],
	employers: {},
	open: false
};

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?', '');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?', '');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?', '');

alert( 'Бюджет на 1 день: ' + mainList.budget / 30 );

console.log(mainList);