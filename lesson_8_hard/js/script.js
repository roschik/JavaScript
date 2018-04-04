window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});

// Timer

	let deadline = '2018-04-06';

	function getTimeRemaning(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( t/(1000*60*60) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	// Функция для добавления нуля спереди, если число меньше 10
	function getZero(num){
		if (num >= 0 && num < 10) { 
			return '0' + num;
		} else {
			return num;
		}
	}

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');


		function updateClock() {
			let t = getTimeRemaning(endtime);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				clearInterval(timeInterval);
			}

		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);

	//Плавный скролл
	function animate(options) {
		let start = performance.now();
		
		requestAnimationFrame(function animate(time) {
			let timeFraction = (time - start) / options.duration;
			if (timeFraction > 1) timeFraction = 1;

			let progress = options.timing(timeFraction)

			options.draw(progress);

			if (timeFraction < 1) {
				requestAnimationFrame(animate);
			}
		});
	}

	function bounce(timeFraction) {
		for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
			if (timeFraction >= (7 - 4 * a) / 11) {
				return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
			}
		}
	}
	function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction))
}

	function makeEaseOut(timing) {
		return function(timeFraction) {
			return 1 - timing(1 - timeFraction);
		}
	}

	var circEaseOut = makeEaseOut(circ);

	let menu = document.querySelector('nav ul');
		
		menu.addEventListener('click', function(e) {
			let li = e.target.closest('li');
			e.preventDefault();
				if (li) {
					let myTime = 2000;
					let elem = document.querySelector(e.target.getAttribute('href'));
					animate({ 
						duration: myTime,
						timing: circEaseOut,
						draw: function(progress) {
							window.scrollBy(0, (progress * elem.getBoundingClientRect().top - menu.offsetHeight));
						}
					})
		
				};
		});
});

