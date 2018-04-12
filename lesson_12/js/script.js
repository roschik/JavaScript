$(document).ready(function() {
	
	$('li a[href$=sheldure], .main_btna, .main_btn').click(showModal);
	$('.close, .overlay').click(hideModal);
	
	function showModal() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown(1000);
	}

	function hideModal() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp(1000);
	}

});
 