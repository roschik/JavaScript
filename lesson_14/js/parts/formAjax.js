function formAjax() {
	// Form

	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
			formBottom = document.getElementById('form'),
			thanksModal = document.querySelector('.thanks-modal'),
			mainModal = document.querySelector('.main-modal'),
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
}

module.exports = formAjax;