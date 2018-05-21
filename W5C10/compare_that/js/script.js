$(document).ready(function(){
	// Put all jquery code here

$('#submit').click(compare);

function compare(){
	var leftSide = Number($('#a').val());
	var rightSide = Number($('#b').val());

	// alert(leftSide);
	// alert(rightSide);

	$('#comparison').html(answer);

	function answer(){
		if(leftSide > rightSide){
			$('#comparison').html('>');
			$('#comparison').css('color', 'blue')
		}
		else{
			$('#comparison').html('<');
			$('#comparison').css('color', 'red');
		}
	}
		if(leftSide == rightSide){
			$('#comparison').html('=');
		}
		// if(leftSide != Number($('#a').val()) || (rightSide != Number($('#b').val()){
		//	$('#comparison').html('can not compute');
		//}
}

});