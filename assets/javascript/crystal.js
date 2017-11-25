var random_number;
var lost = 0;
var win = 0;
var previous = 0;

$(document).ready(function(){

	// starts function
	var resetAndStart = function () {

	   $(".crystals").empty();

	   var images = [
				    'assets/images/redCrystal.png',
					'assets/images/blueCrystal.png',
					'assets/images/yellowCrystal.png',
					'assets/images/greenCrystal.png'
					];
			
		
	   random_number = Math.floor(Math.random() * 100 ) + 19; 


	   $("p","#result").text(random_number);


	   for(var i = 0; i < 4; i++){

		  var random = Math.floor(Math.random() * 11) + 1;
		// creating div to populate img

		  var crystal = $("<div>");
			  crystal.attr({
				  "class": 'crystal',
				  "data-random": random
			  });
			  crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			  });

        // appending previous data to class=crystals
		$(".crystals").append(crystal);

	    }

	    $("#previous").html("Total Score: " + previous);

    }//end of function


    resetAndStart();


     // on click funtion and converting the value an integer 
     // passing data using attribute
     // checking "previous" for wins and loss
    $(document).on('click', ".crystal", function () {

	     var num = parseInt($(this).attr('data-random'));

	     previous += num;


	     $("#previous").html("Total score: " + previous);

	     console.log(previous);

	    if(previous > random_number){

		   lost++;

		$("#lost").html("You lost: " + lost);

		   previous = 0;

		resetAndStart();

	    } 
	     else if(previous === random_number){

		         win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});
});


