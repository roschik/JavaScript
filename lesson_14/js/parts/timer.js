function timer() {
	// Timer

		let deadline = '2018-04-25';

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
}

module.exports = timer;