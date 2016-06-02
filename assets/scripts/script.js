'use strict';

const ifWinner = function ()
	{

		//horizontal winners
		//

		if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
		{
			alert("X is the winner!");
		}

		else if (($("#divOne").hasClass("oBox") && $("#divTwo").hasClass("oBox") && $("#divThree").hasClass("oBox")))
		{
			alert("O is the winner!");
		}

		else if (($("#divFour").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divSix").hasClass("xBox")))
		{
			alert("Winner!");
		}

		else if (($("#divFour").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divSix").hasClass("oBox")))
		{
			alert("Winner!");
		}



		//vertical winners
		//

		else if (($("#divOne").hasClass("xBox") && $("#divFour").hasClass("xBox") && $("#divSeven").hasClass("xBox")))
		{
			alert("Winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFour").hasClass("oBox") && $("#divSeven").hasClass("oBox")))
		{
			alert("Winner!");
		}



		//diagonal winners
		//

		else if (($("#divOne").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divNine").hasClass("xBox")))
		{
			alert("Winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divNine").hasClass("oBox")))
		{
			alert("Winner!");

		}
	};
//
//


// the click event handlers in the box
$( document ).ready(function() {
    let counter = 0;

    $("#divOne").on("click", function(){
				if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
				{
			  	if (counter % 2 === 0)
	        {
	            $(this).addClass('xBox');
	            counter++;

	        }
	        else
	        {
	            $(this).addClass('oBox');
	            counter++;

	        }
				}
        ifWinner();
    	});



	$("#divTwo").on("click", function(){
			if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			{
				if (counter % 2 === 0)
		    {
		        $(this).addClass('xBox');
		        counter++;
		    }
				else
				{
		        $(this).addClass('oBox');
		        counter++;
		    }
			}
	    ifWinner();
	    });


    $("#divThree").on("click", function(){
			if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			{
				if (counter % 2 === 0)
				{
						$(this).addClass('xBox');
						counter++;
				}
				else
				{
						$(this).addClass('oBox');
						counter++;

				}
			}
			ifWinner();
    	});

    $("#divFour").on("click", function(){
			if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			{
				if (counter % 2 === 0)
				{
						$(this).addClass('xBox');
						counter++;
				}
				else
				{
						$(this).addClass('oBox');
						counter++;

				}
			}
			ifWinner();
			});

     $("#divFive").on("click", function(){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			 {
				 if (counter % 2 === 0)
				 {
						 $(this).addClass('xBox');
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 counter++;

				 }
			 }
			 ifWinner();
			 });

     $("#divSix").on("click", function(){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			 {
				 if (counter % 2 === 0)
				 {
						 $(this).addClass('xBox');
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 counter++;

				 }
			 }
			 ifWinner();
			 });

     $("#divSeven").on("click",function(){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			 {
				 if (counter % 2 === 0)
				 {
						 $(this).addClass('xBox');
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 counter++;

				 }
			 }
			 ifWinner();
			 });

     $("#divEight").on("click", function(){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
 			{
 				if (counter % 2 == 0)
 				{
 						$(this).addClass('xBox');
 						counter++;
 				}
 				else
 				{
 						$(this).addClass('oBox');
 						counter++;

 				}
 			}
 			ifWinner();
		});

     $("#divNine").on("click", function(){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			{
				if (counter % 2 == 0)
				{
						$(this).addClass('xBox');
						counter++;
				}
				else
				{
						$(this).addClass('oBox');
						counter++;

				}
			}
			ifWinner();
		});

		$("#resetButton").on("click", function( event ) {
				event.preventDefault();
				counter = 0;
				// $("#divOne").removeClass();
				$("div").removeClass();
      });

    });
