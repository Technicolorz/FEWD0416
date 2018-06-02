$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/
	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
    document.getElementById('returnLast_submit').onclick = function(){
    	var text = document.getElementById('returnLast_input').value;
    	document.getElementById('returnLast_display').innerHTML = text.charAt(text.length-2);
    }
	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	document.getElementById('checkWork_submit').onclick = function(){
		var p = "Flexitarian sustainable VHS, ramps flannel lumbersexual shabby chic venmo man bun blue bottle plaid synth viral. Austin quinoa fap iPhone banjo 3 wolf moon. Franzen williamsburg street art knausgaard synth literally, mumblecore sriracha scenester direct trade banjo bitters ugh. Forage hammock tilde taxidermy. Meh VHS occupy, asymmetrical helvetica pop-up next level poutine normcore. Flannel banh mi skateboard readymade, asymmetrical gluten-free chicharrones microdosing health goth. Pinterest normcore freegan gastropub pug.";
		var n = p.includes("Flexitarian", "sustainable", "VHS", "ramps", "flannel", "lumbersexual", "shabby", "chic", "venmo", "man", "bun", "blue", "bottle", "plaid", "synth", "viral", "Austin", "quinoa", "fap", "iPhone", "banjo", "3", "wolf", "moon", "Franzen", "williamsburg", "street", "art", "knausgaard", "synth", "literally", "mumblecore", "sriracha", "scenester", "direct", "trade", "banjo", "bitters", "ugh", "Forage", "hammock", "tilde", "taxidermy", "Meh", "VHS", "occupy", "asymmetrical", "helvetica", "pop-up", "next", "level", "poutine", "normcore", "Flannel", "banh", "mi", "skateboard", "readymade", "asymmetrical", "gluten-free", "chicharrones", "microdosing", "health", "goth", "Pinterest", "normcore", "freegan", "gastropub", "pug")
		var answer;
		if(checkWork_input = n){
			answer = "YES";
		} else{
			answer = "NAH";
		}
		document.getElementById('checkWork_display').innerHTML = answer;
	}
	// $('#checkWork_submit').click(function(){
	// 	var p = "Flexitarian sustainable VHS, ramps flannel lumbersexual shabby chic venmo man bun blue bottle plaid synth viral. Austin quinoa fap iPhone banjo 3 wolf moon. Franzen williamsburg street art knausgaard synth literally, mumblecore sriracha scenester direct trade banjo bitters ugh. Forage hammock tilde taxidermy. Meh VHS occupy, asymmetrical helvetica pop-up next level poutine normcore. Flannel banh mi skateboard readymade, asymmetrical gluten-free chicharrones microdosing health goth. Pinterest normcore freegan gastropub pug.";
	// 	if('#checkWork_input' == p){
	// 		$('#checkWork_display').html('YES');
	// 		}
	//	else {
	//		$('#checkWork_display').html('NO');
	//	}
	// });

	/****** QUESTION 4 ************/
	// Reverse string inputted by user /ehhhhhhhhh ;;
	
	// var r;
	// document.getElementById('reverseString_submit').onclick = function reverseString(str){
	//	r = document.getElementById('reverseString_input').split('');
	//	r.reverse();
	//	str = r.join('');
	//	return str;
	// }
	// reverseString(document.getElementById('reverseString_input'));

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	$('#helloworld_submit').click(function() {
	var hello = 'HELLO WORLD';
		$('#helloworld_display').html(hello);
	});

	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	$('#greet1_submit').click(function(){
	// var name = $('#greet1_input');
	var greet = 'Hello ' + $('#greet1_input') + ' welcome to the website.';
		$('#greet1_display').html(greet);
	});

	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME
	$('#greet2_submit').click(function(){
	var name = ('Alice', 'Bob','Amy');
	var greet = 'Hello ' + name + ' welcome to the website.';
		if($('#greet2_input') == name){
			$('#greet2_display').html(greet);
		}else {
			$('#greet2_display').html('Bye');
		}
	});

	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	$('#integerMax_submit').click(function(){
		var left = ('#integerMax_input1');
		var right = ('#integerMax_input2');
		if(left > right) {
			$('#integerMax_display').html(left);
		} else {
			$('#integerMax_display').html(right);
		}
	});

	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)



	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest

	$('#integerSort_submit').click(function(){
		var x = $('#integerSort_input1'); //will work with just numbers as values wont work when 'id' is value
		var y = $('#integerSort_input2');
		var z = $('#integerSort_input3');

	if (x>y && x>z)
{ if (y>z)
    {
        $('#integerSort_display').html(x + ", " + y + ", " + z);
    } else{
        $('#integerSort_display').html(x + ", " + z + ", " + y);
    }
	}else if (y>x && y>z)
{ if (x>z)
    {
         $('#integerSort_display').html(y + ", " + x + ", " + z);
    } else{
         $('#integerSort_display').html(y + ", " + z + ", " + x);
    }
	}else if (z>x && z>y)
{ if (x>y)
    {
        $('#integerSort_display').html(z + ", " + x + ", " + y);
    } else{
        $('#integerSort_display').html(z + ", " + y + ", " + x);
    }
}        
	});

	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function



	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user
	$('#factoral_submit').click(function(){
		var value = $('#factoral_input').val();
		input = $('#factoral_input') * i;
		for (i = value; i > 0; i++);
		$("#factoral_display").html(input);
	});

	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				
	$('#star_submit').click(function(){
		var n;
		var text = "*"
		for(var n=1; n<=5; n++){
			text += n + "<br>";
			$('#star_display').html(text);
		}
	}); //;-;

	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	
	
});	
