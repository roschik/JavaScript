//Первое задание
let week = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();
let div = document.getElementById('days');

for (let i = 0; i < week.length; i++) {
	if ((week[i] == 'Суббота' || week[i] == 'Воскресенье') && i == date.getDay()) {
		div.innerHTML += '<strong><em>' + week[i] + '</em></strong><br>';
	} else if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
		div.innerHTML += '<strong>' + week[i] + '</strong><br>';
	} else if (i == date.getDay()) {
		div.innerHTML += '<em>' + week[i] + '</em><br>';
	} else {
		div.innerHTML += week[i] + '<br>';
	}
}


//Второе задание
let arr = ['34523', '9834', '58451134', '8234341', '489452', '79823', '323'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i]);
	}
}
