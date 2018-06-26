$(document).ready(function(){
	$('#search_form').submit(function(e){
		e.preventDefault();
		var request = $.ajax({
			url:"https://pokeapi.co/api/v2/pokemon"
		});
		request.done(function(poke_data){
			var pokemon = poke_data.results;
			var poke_html = "";
			for(var i=0;i<pokemon.length;i++){
				var poke_obj = pokemon[i];
				var poke = "<div data-url='" + poke_obj.url + "' class='pokemon_item'>" + poke_obj.name + "<button class='more_info'>more info</button><div class='poke_more'></div></div>";
				poke_html += poke;
			}
			$('#pokemon_list').html(poke_html);
		});
	});
	$('#pokemon_list').on('click','.pokemon_item .more_info',function(){
		var the_url = $(this).parent().data("url");
		console.log(the_url);
		var request = $.ajax({
			url: the_url
		});
		request.done(function(poke_data){
			// var poke_type = poke_.results;
			var sprite = poke_data.sprites.front_default;
			var poke_weight = poke_data.weight;
			var poke_height = poke_data.height;
			$('#poke_info .sprite').attr('src', sprite);
			$('#poke_info .pokeweight').text(poke_weight);
			$('#poke_info .pokeheight').text(poke_height);
		});
	});

});
