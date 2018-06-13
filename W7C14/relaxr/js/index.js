$(document).ready(function(){

	$('#resp_nav_trigger').click(function(){
		if($(this).hasClass('toggled')){
			$('header nav ul li').slideUp();
			$(this).removeClass('toggled');
		}
		else {
			$('header nav ul li').slideDown();
			$(this).addClass('toggled');
		}
	});

});