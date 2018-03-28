let menu = document.querySelector('.menu'),
		menuItems = document.querySelectorAll('li.menu-item'),
		title = document.querySelector('#title'),
		adv = document.querySelector('.adv'),
		column = document.querySelectorAll('.column'),
		div = document.querySelector('#prompt');

//Восстанавливаем порядок в меню
let thirdItem = menu.removeChild(menuItems[1]);
menu.insertBefore(thirdItem, menuItems[3]);

//Создаем 5 пункт
let li = document.createElement('li');
li.setAttribute('class', 'menu-item');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);

//Меняем картинку
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';

//Меняем заголовок
title.innerHTML = 'Мы продаем только подлинную технику Apple';

//Удаляем рекламу
column[1].removeChild(adv);

//Спрашиваем про отношение пользователя и записываем в "prompt"
div.innerHTML = prompt('Ваше отношение к технике Apple?', '');
