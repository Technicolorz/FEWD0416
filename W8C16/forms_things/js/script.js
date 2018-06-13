$(document).ready(function(){

	$("#resume_trigger").click(function() {
		$("#resume").click();
		});

	$('.contact_method').click(function(){
		$('.contact_method').removeClass('radio_toggled');
		$(this).addClass('radio_toggled');
		var val = $(this).data('cval');
		$('#contact').val(val);
	});
	$('.select_dropdown_selection').click(function(){
		$('.select_dropdown').slideDown();
	});
	$('.select_dropdown li').click(function(){
		var pos = $(this).data('pval');
		var name = $(this).text();
		$('.select_dropdown').slideUp();
		$('.select_dropdown_selection').text(name);
		$('#position').val(pos);
	});
		
});