'use strict';

const api = require('./auth/api.js');
const ui = require('./auth/ui.js');

let gameArray = ["","","","","","","","","",];

const ifWinner = function ()
	{

		//horizontal winners

		if (gameArray[0] === "x" && gameArray[1] === "x" && gameArray[2] === "x")
		// if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
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



// the click event handlers in the box
$( document ).ready(function() {

    const authEvents = require('./auth/events.js');

    authEvents.addHandlers();

    let counter = 0;

    $("#divOne").on("click", function(){
				if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
				{
			  	if (counter % 2 === 0)
	        {
	            $(this).addClass('xBox');
							gameArray[0] = "x";
	            counter++;
							console.log(gameArray);

              let data = {
                  "game": {
                    "cell": {
                      "index": 0,
                      "value": "x"
                    },
                    "over": false
                }
              };

              api.updateGame(data)
              .done(ui.createGameSuccess)
              .then(console.log('milk'))
              .fail(ui.failure);

	        }
	        else
	        {
	            $(this).addClass('oBox');
							gameArray[0] = "o";
							counter++;
							console.log(gameArray);


              let data = {
                  "game": {
                    "cell": {
                      "index": 0,
                      "value": "o"
                    },
                    "over": false
                }
              };


              api.updateGame(data)
              .done(ui.createGameSuccess)
              .then(console.log('milk'))
              .fail(ui.failure);
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
						gameArray[1] = "x";
						counter++;

            let data = {
                "game": {
                  "cell": {
                    "index": 1,
                    "value": "x"
                  },
                  "over": false
              }
            };

            api.updateGame(data)
            .done(ui.createGameSuccess)
            .then(console.log('milk'))
            .fail(ui.failure);
		    }
				else
				{
		        $(this).addClass('oBox');
						gameArray[1] = "o";
						counter++;

            let data = {
                "game": {
                  "cell": {
                    "index": 1,
                    "value": "o"
                  },
                  "over": false
              }
            };

            api.updateGame(data)
            .done(ui.createGameSuccess)
            .then(console.log('milk'))
            .fail(ui.failure);

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
						gameArray[2] = "x";
						counter++;

				}
				else
				{
						$(this).addClass('oBox');
						gameArray[2] = "o";
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
						gameArray[3] = "x";
						counter++;
				}
				else
				{
						$(this).addClass('oBox');
						gameArray[3] = "o";
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
						 gameArray[4] = "x";
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 gameArray[4] = "o";
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
						 gameArray[5] = "x";
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 gameArray[5] = "o";
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
						 gameArray[6] = "x";
						 counter++;
				 }
				 else
				 {
						 $(this).addClass('oBox');
						 gameArray[6] = "o";
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
						gameArray[7] = "x";
						counter++;
 				}
 				else
 				{
 						$(this).addClass('oBox');
						gameArray[7] = "o";
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
						gameArray[8] = "x";
						counter++;
				}
				else
				{
						$(this).addClass('oBox');
						gameArray[8] = "o";
						counter++;

				}
			}
			ifWinner();
		});

		$("#resetButton").on("click", function( event ) {
				event.preventDefault();
				counter = 0;
				gameArray = ["","","","","","","","","",];
				// $("#divOne").removeClass();
				$("div").removeClass();
      });

    });
