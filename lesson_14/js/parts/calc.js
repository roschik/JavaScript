function calc() {
	// Calc

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

	function linear(timeFraction) {
		return timeFraction;
	}

	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personsSum = parseInt(this.value);
		this.value = personsSum;
		total = (daysSum + personsSum)*4000;

		animate({ 
			duration: 400,
			timing: linear,
			draw: function(progress) {
				if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));
				}
			}
		});
	});

	restDays.addEventListener('change', function() {
		daysSum = parseInt(this.value);
		this.value = daysSum;
		total = (daysSum + personsSum)*4000;

		animate({ 
			duration: 400,
			timing: linear,
			draw: function(progress) {
				if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));
				}
			}
		});
	});

	place.addEventListener('change', function() {
		animate({ 
			duration: 400,
			timing: linear,
			draw: function(progress) {
				if (restDays.value == '' || persons.value == '' || restDays.value <= 0 || persons.value <= 0) {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = parseInt(progress * (a * place.options[place.selectedIndex].value));
				}
			}
		});

	});
}

module.exports = calc;