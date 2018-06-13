$(document).ready(function(){

	$('#hamburger').click(function(){
		if($(this).hasClass('toggled')){
		 	$('#page-header nav').slideUp();
		  	$(this).removeClass('toggled');
		}
		else {
		 	$('#page-header nav').slideDown();
		  	$(this).addClass('toggled');
		}
	});

});