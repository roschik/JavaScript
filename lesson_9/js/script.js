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

	let deadline = '2018-04-10';

	function getTimeRemaning(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( t/(1000*60*60) );
			if (t <=0) {
				seconds = 0;
				minutes = 0;
				hours = 0;
			}
				 

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
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
				clearInterval(timeInterval);
			}

		};

		
			let timeInterval = setInterval(updateClock, 1000);

			

	};

	setClock('timer', deadline);

	//Плавный скролл
	function animate(options){
		var start = performance.now();
			
		requestAnimationFrame(function animation(time){
			var timeFraction = (time - start) / options.duration;
			if(timeFraction > 1) timeFraction = 1;
				
			var progress = options.timing(timeFraction);
			options.draw(progress);
				
			if(progress < 1) requestAnimationFrame(animation);
		});
	};

	function quad(progress) {
	  return Math.pow(progress, 2)
	}

	let menu = document.querySelector('nav ul');
		
	menu.addEventListener('click', function(e) {
		let li = e.target.closest('li');
		e.preventDefault();
			if (li) {
				let myTime = 1500;
				let elem = document.querySelector(e.target.getAttribute('href'));
				animate({ 
					duration: myTime,
					timing: quad,
					draw: function(progress) {
						window.scrollBy(0, (progress *( elem.getBoundingClientRect().top - menu.offsetHeight)));
					}
				});
			};
	});

	// Modal

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			infoTab = document.querySelector('.info');

	infoTab.addEventListener('click', function(e) {
		let button = e.target.closest('.description-btn');
		if (button) {
			e.target.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
	});		

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});


});
