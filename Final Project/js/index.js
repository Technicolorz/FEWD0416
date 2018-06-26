$(document).ready(function(){


	var coll = document.getElementsByClassName("btn");
	var i;

	for (i = 0; i < coll.length; i++) {
	    coll[i].addEventListener("click", function() {
	        this.classList.toggle("active");
	        var section = this.nextElementSibling;
	        if (section.style.display === "block") {
	            section.style.display = "none";

	        } else {
	            section.style.display = "block";
	        }
	    });
	}


/*	http://creativeindividual.co.uk/2011/02/create-a-pop-up-div-in-jquery/	*/	
	$(function() {
  	var moveLeft = 25;
  	var moveDown = -275;

  	$('#rg .team').hover(function(e) {
    	$('.moves_sec').show();
      	//.css('top', e.pageY + moveDown)
      	//.css('left', e.pageX + moveLeft)
      	//.appendTo('body');
  	}, function() {
   		$('.moves_sec').hide();
  	});

  	$('#rg .team').mousemove(function(e) {
    	$(".moves_sec").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -285;

  	$('#rs .team').hover(function(e) {
    	$('.moves_sec2').show();
  	}, function() {
   		$('.moves_sec2').hide();
  	});

  	$('#rs .team').mousemove(function(e) {
    	$(".moves_sec2").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -445;

  	$('#dp .team').hover(function(e) {
    	$('.moves_sec3').show();
  	}, function() {
   		$('.moves_sec3').hide();
  	});

  	$('#dp .team').mousemove(function(e) {
    	$(".moves_sec3").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -445;

  	$('#platinum .team').hover(function(e) {
    	$('.moves_sec4').show();
  	}, function() {
   		$('.moves_sec4').hide();
  	});

  	$('#platinum .team').mousemove(function(e) {
    	$(".moves_sec4").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -565;

  	$('#gs .team').hover(function(e) {
    	$('.moves_sec5').show();
  	}, function() {
   		$('.moves_sec5').hide();
  	});

  	$('#gs .team').mousemove(function(e) {
    	$(".moves_sec5").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -565;

  	$('#bw .team').hover(function(e) {
    	$('.moves_sec6').show();
  	}, function() {
   		$('.moves_sec6').hide();
  	});

  	$('#bw .team').mousemove(function(e) {
    	$(".moves_sec6").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -710;

  	$('#bw2 .team').hover(function(e) {
    	$('.moves_sec7').show();
  	}, function() {
   		$('.moves_sec7').hide();
  	});

  	$('#bw2 .team').mousemove(function(e) {
    	$(".moves_sec7").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -710;

  	$('#xy .team').hover(function(e) {
    	$('.moves_sec8').show();
  	}, function() {
   		$('.moves_sec8').hide();
  	});

  	$('#xy .team').mousemove(function(e) {
    	$(".moves_sec8").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -860;

  	$('#oa .team').hover(function(e) {
    	$('.moves_sec9').show();
  	}, function() {
   		$('.moves_sec9').hide();
  	});

  	$('#oa .team').mousemove(function(e) {
    	$(".moves_sec9").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});

	$(function() {
  	var moveLeft = 25;
  	var moveDown = -860;

  	$('#sm .team').hover(function(e) {
    	$('.moves_sec10').show();
  	}, function() {
   		$('.moves_sec10').hide();
  	});

  	$('#sm .team').mousemove(function(e) {
    	$(".moves_sec10").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  		});

	});




});
