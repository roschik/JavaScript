$(document).ready(function() {
	
	$('li a[href$=sheldure]').click(showModal);
	$('.main_btna').click(showModal);
	$('.main_btn').click(showModal);
	$('.close').click(hideModal);

	function showModal() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown(1000);
	}

	function hideModal() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp(1000);
	}

});
 