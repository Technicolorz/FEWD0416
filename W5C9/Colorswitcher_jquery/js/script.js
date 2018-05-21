$(document).ready(function(){

$("#grayButton").click(backgroundGray);
$("#whiteButton").click(backgroundWhite);
$("#orangeButton").click(backgroundOrange);

});

function backgroundGray() {
		$("body").css({"backgroundColor" : "gray"});
}

function backgroundWhite() {
	$("body").css({"backgroundColor" : "white"});
}

function backgroundOrange() {
		$("body").css({"backgroundColor" : "gold"});
}