$(document).ready(function() {
	
	$('li a[href$=sheldure], .main_btna, .main_btn').click(showModal);
	$('.close').click(hideModal);
	$('.back').click(hideThanks);
	$('.modal').css({bottom: 0, marginLeft: 0});

	function showModal() {
		$('.overlay').fadeIn('slow');
		$('.modal').animate({
			opacity: 'toggle',
			height: 'show',
			width: 'show',
			marginLeft: '30%',
			bottom: '30vh'
		}, {
			duration: 600, 
			specialEasing: {
				opacity: 'linear',
				height: 'swing',
				width: 'swing',
				marginLeft: 'swing',
				bottom: 'swing'
			}
		});
	}

	function hideModal() {
		$('.overlay').fadeOut(1100);
		$('.modal').animate({
			opacity: 'toggle',
			height: 'hide',
			width: 'hide',
			marginLeft: 0,
			bottom: 0
		}, {
			duration: 600, 
			specialEasing: {
				opacity: 'linear',
				height: 'swing',
				width: 'swing',
				marginLeft: 'swing',
				bottom: 'swing'
			}
		});
		$('.thanks').hide();
	}

	function hideThanks() {
		$('.overlay').fadeOut(1000);
		$('.thanks').hide(1000);
	}


	// Form
	$(".contactform_select").submit(function(event) {
		event.preventDefault();
		let data = $(this).serialize(); 
		$.ajax({
			url: 'server.php',
			type: 'POST',
			data: data,
		})
		.done(function() {
			$('.modal').hide(500);
			$('.thanks').show(800);
			$('input').val('');
			$('.checkbox').prop('checked', false);
		})
		.fail(function() {
			$('.modal').append('<div>Что-то пошло не так...</div>');
		})
	});

});
  