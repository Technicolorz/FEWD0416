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

	var applicants = [];
	$('#login_form').submit(function(e){
		e.preventDefault();
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var contact = $('#contact').val();
		var position = $('#position').val();
		var applicant = {
			firstname:fname,
			lastname:lname,
			phone:phone,
			email:email,
			address:address,
			contact:contact,
			position:position
			}
		applicants.push(applicant);
		outputApplications();
	});
		
	function outputApplications(){
		var applicants_html = "";
		for(var i=0; i<applicants.length; i++){
			var a = "<li>" + applicants[i].lastname + "</li>";
			applicants_html += a;
		}
		$('#applications').html(applicants_html);
	}

});


