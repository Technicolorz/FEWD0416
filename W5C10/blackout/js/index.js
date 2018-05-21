$(document).ready(function(){

	$('#light_switch').click(changeBg);

	var lights = 'on';

	function changeBg(){
	//	alert('hewwo?')

		if(lights == 'on'){
			$('body').css('background','black');
			lights = 'off';
		} else {
			$('body').css('background','white');
			lights = 'on';
		}
	}
});