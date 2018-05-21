$(document).ready(function(){
	// Put all jquery code here
	$("#thing1").click(thing1);
	$("#thing2").click(thing2(){
		alert('wowwie i got clicked too');
	}
});

function thing1() {
	alert('i got clicked');
}