function modal() {
	// Modal

	let more = document.querySelector('.more'),
			overlay = document.querySelectorAll('.overlay'),
			mainModal = document.querySelector('.main-modal'),
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
						popup.style.top = `${progress * 10}%`;
						popup.style.left = `${progress * 50}%`;
						popup.style.transform = `translateX(${progress*(-50)}%)`;
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
					popup.style.top = `${progress * 10}%`;
					popup.style.left = `${progress * 50}%`;
					popup.style.transform = `translateX(${progress*(-50)}%)`;
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
		return Math.pow(progress, 2);
	}
}

module.exports = modal;