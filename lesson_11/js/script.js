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

	//Scroll

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
						window.scrollBy(0, (progress * (elem.getBoundingClientRect().top - menu.offsetHeight)));
					}
				});
			};
	});

	// Modal

	let more = document.querySelector('.more'),
			overlay = document.querySelectorAll('.overlay'),
			mainModal = document.querySelector('.main-modal'),
			thanksModal = document.querySelector('.thanks-modal'),
			popup = document.querySelector('.main-modal .popup'),
			close = document.querySelectorAll('.popup-close'),
			infoTab = document.querySelector('.info');

	infoTab.addEventListener('click', function(e) {
		let button = e.target.closest('.description-btn');
		popup.style.opacity = 0;

		if (button) {
			e.target.classList.add('more-splash');
			let myTime = 350;
				
				animate({ 
					duration: myTime,
					timing: quad,
					draw: function(progress) {
						mainModal.style.display = 'block';
						popup.style.position = 'relative';
						popup.style.opacity = progress * 1;
						popup.style.top = progress * 10 + '%';
						popup.style.left = progress * 50  + '%';
						popup.style.transform = 'translateX(' + progress*(-50) + '%)';
					}
				});
			document.body.style.overflow = 'hidden';
		}
	});   

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		popup.style.opacity = 0;
		let myTime = 350;
				
			animate({ 
				duration: myTime,
				timing: quad,
				draw: function(progress) {
					mainModal.style.display = 'block';
					popup.style.position = 'relative';
					popup.style.opacity = progress * 1;
					popup.style.top = progress * 10 + '%';
					popup.style.left = progress * 50  + '%';
					popup.style.transform = 'translateX(' + progress*(-50) + '%)';
				}
			});
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', function() {
		for (let i = 0; i < overlay.length; i++) {
			overlay[i].style.display = 'none';
		}
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	}
	

	// Form

	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
			formBottom = document.getElementById('form'),
			input = document.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

	function sendForm(elem) {
		elem.addEventListener('submit', function(e) {
			e.preventDefault();
				elem.appendChild(statusMessage);

				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');

				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				let formData = new FormData(elem);

				request.send(formData);

				request.onreadystatechange = function() {
					if (request.readyState < 4) {
						statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							thanksModal.style.display = 'block';
							mainModal.style.display = 'none';
							statusMessage.innerHTML = '';
						}
						else {
							statusMessage.innerHTML = message.failure;
						}
					}
				}

				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
		});
	}
	
	sendForm(form);
	sendForm(formBottom);	

});

