$(document).ready(function(){

	$('#entry').submit(enter);

	var total = 0;

	function enter(event){
		event.preventDefault();
		var entry = $('#newEntry').val();
		entry = parseFloat(entry);
		total = total + entry;
		
		entry = currencyFormat(entry);
		// displayTotal = currencyFormat(total);
		$('#entries').append("<tr><td></td><td>" + entry + "</td></tr>");
		$('#total').html(currencyFormat(total)); // $('#total').html(displayTotal)
	}

	function currencyFormat(text){
		text = parseFloat(text);
		text = text.toFixed(2);
		text = "$" + text;
		return text;
	}
});