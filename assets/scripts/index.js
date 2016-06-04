'use strict';

let gameArray = ["","","","","","","","","",];

// const preventPlay = function () {
//   // if ((!$("div")hasClass("xBox")) && (!$("div").hasClass("oBox")))
//   // // (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
//   // {
//     $("div").addClass("gameOver");
//   // }
// };

let winnerBool= true;

const ifTie = function () {
  if ((gameArray[0] !== "") && (gameArray[1] !== "") && (gameArray[2] !== ""))
  // if (counter < 9)
  {
    alert("We have a cat's draw! Meow Meow!");
  }
};


const ifWinner = function ()
	{
		//horizontal winners
// top row
		if (gameArray[0] === "x" && gameArray[1] === "x" && gameArray[2] === "x")
		// if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
		{
      gameArray = ["","","","","","","","","",];
      winnerBool = false;
      //preventPlay();
      alert("X is the winner!");
		}

		else if (($("#divOne").hasClass("oBox") && $("#divTwo").hasClass("oBox") && $("#divThree").hasClass("oBox")))
		{
      gameArray = ["","","","","","","","","",];
      winnerBool = false;
			alert("O is the winner!");
		}
// middle row
		else if (($("#divFour").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divSix").hasClass("xBox")))
		{
      gameArray = ["","","","","","","","","",];
      winnerBool = false;
			alert("X is the winner!");
		}

		else if (($("#divFour").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divSix").hasClass("oBox")))
		{
      gameArray = ["","","","","","","","","",];
      winnerBool = false;
			alert("X is the winner!");
		}
// bottom row
    else if (gameArray[6] === "x" && gameArray[7] === "x" && gameArray[8] === "x")
    // if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
    {
      winnerBool = false;
      alert("X is the winner!");
    }

    else if (gameArray[6] === "o" && gameArray[7] === "o" && gameArray[8] === "o")
    {
      winnerBool = false;
      alert("O is the winner!");
    }


		//vertical winners

//left vertical winner
		else if (($("#divOne").hasClass("xBox") && $("#divFour").hasClass("xBox") && $("#divSeven").hasClass("xBox")))
		{
      winnerBool = false;
			alert("X is the winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFour").hasClass("oBox") && $("#divSeven").hasClass("oBox")))
		{
      winnerBool = false;
			alert("Winner!");
		}
//middle vertical winner
    else if (gameArray[1] === "x" && gameArray[4] === "x" && gameArray[7] === "x")
    // if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
    {
      winnerBool = false;
      alert("X is the winner!");
    }

    else if (gameArray[1] === "o" && gameArray[4] === "o" && gameArray[7] === "o")
    {
      winnerBool = false;
      alert("O is the winner!");
    }
//right vertical winner
    else if (gameArray[2] === "x" && gameArray[5] === "x" && gameArray[8] === "x")
    // if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
    {
      winnerBool = false;
      alert("X is the winner!");
    }

    else if (gameArray[2] === "o" && gameArray[5] === "o" && gameArray[8] === "o")
    {
      winnerBool = false;
      alert("O is the winner!");
    }

//diagonal winners
//left to right diagonal winner
		else if (($("#divOne").hasClass("xBox") && $("#divFive").hasClass("xBox") && $("#divNine").hasClass("xBox")))
		{
      winnerBool = false;
			alert("X is the winner!");
		}
		else if (($("#divOne").hasClass("oBox") && $("#divFive").hasClass("oBox") && $("#divNine").hasClass("oBox")))
		{
      winnerBool = false;
			alert("Winner!");
		}
//right to left diagonal winner
    else if (gameArray[2] === "x" && gameArray[4] === "x" && gameArray[6] === "x")
    // if ($("#divOne").hasClass("xBox") && $("#divTwo").hasClass("xBox") && $("#divThree").hasClass("xBox"))
    {
      winnerBool = false;
      alert("X is the winner!");
    }
    else if (gameArray[2] === "o" && gameArray[4] === "o" && gameArray[6] === "o")
    {
      winnerBool = false;
      alert("O is the winner!");
    }
  };

// the click event handlers in the box
$( document ).ready(function() {

    const authEvents = require('./auth/events.js');

    authEvents.addHandlers();

    let counter = 0;

    $("#divOne").on("click", function(){
      if (winnerBool){
        if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
				{
			  	if (counter % 2 === 0)
	        {
	            $(this).addClass('xBox');
							gameArray[0] = "x";
	            counter++;
							console.log(gameArray);
              ifWinner();
	        }
	        else
	        {
	            $(this).addClass('oBox');
							gameArray[0] = "o";
							counter++;
							console.log(gameArray);
              ifWinner();

	        }
				}
       }
    	});



	$("#divTwo").on("click", function(){
      if (winnerBool){
        if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			{
  				if (counter % 2 === 0)
  		    {
  		        $(this).addClass('xBox');
  						gameArray[1] = "x";
  						counter++;
              ifWinner();
  		    }
  				else
  				{
  		        $(this).addClass('oBox');
  						gameArray[1] = "o";
  						counter++;
              ifWinner();
  		    }
  			}
       }
	    });


    $("#divThree").on("click", function(){
      if (winnerBool){
        if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			{
  				if (counter % 2 === 0)
  				{
  						$(this).addClass('xBox');
  						gameArray[2] = "x";
  						counter++;
              ifWinner();
  				}
  				else
  				{
  						$(this).addClass('oBox');
  						gameArray[2] = "o";
  						counter++;
              ifWinner();

  				}
  			}
       }
    	});

    $("#divFour").on("click", function(){
      if (winnerBool)
        {
        console.log(winnerBool);
        if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			{
  				if (counter % 2 === 0)
  				{
  						$(this).addClass('xBox');
  						gameArray[3] = "x";
  						counter++;
              ifWinner();
  				}
  				else
  				{
  						$(this).addClass('oBox');
  						gameArray[3] = "o";
  						counter++;
              ifWinner();
  				}
  			}
      }
		});

     $("#divFive").on("click", function(){
        if (winnerBool){
  			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			 {
  				 if (counter % 2 === 0)
  				 {
  						 $(this).addClass('xBox');
  						 gameArray[4] = "x";
  						 counter++;
               ifWinner();
  				 }
  				 else
  				 {
  						 $(this).addClass('oBox');
  						 gameArray[4] = "o";
  						 counter++;
               ifWinner();
  				 }
  			 }
        }
  		});

     $("#divSix").on("click", function(){
       if (winnerBool){
  			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			 {
  				 if (counter % 2 === 0)
  				 {
  						 $(this).addClass('xBox');
  						 gameArray[5] = "x";
  						 counter++;
               ifWinner();
  				 }
  				 else
  				 {
  						 $(this).addClass('oBox');
  						 gameArray[5] = "o";
  						 counter++;
               ifWinner();
  				 }
  			 }
       }
       });

     $("#divSeven").on("click",function(){
       if (winnerBool){
  			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
  			 {
  				 if (counter % 2 === 0)
  				 {
  						 $(this).addClass('xBox');
  						 gameArray[6] = "x";
  						 counter++;
               ifWinner();
  				 }
  				 else
  				 {
  						 $(this).addClass('oBox');
  						 gameArray[6] = "o";
  						 counter++;
               ifWinner();
  				 }
  			 }
       }
			});

     $("#divEight").on("click", function(){
       if (winnerBool){
  			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
   		 	 {
   				if (counter % 2 == 0)
   				{
   						$(this).addClass('xBox');
  						gameArray[7] = "x";
  						counter++;
              ifWinner();
   				}
   				else
   				{
   						$(this).addClass('oBox');
  						gameArray[7] = "o";
  						counter++;
              ifWinner();
   				}
   			}
      }
		});

     $("#divNine").on("click", function(){
       if (winnerBool){
			 if (!$(this).hasClass("xBox") && !$(this).hasClass("oBox"))
			 {
				if (counter % 2 == 0)
				{
						$(this).addClass('xBox');
						gameArray[8] = "x";
						counter++;
            ifWinner();
				}
				else
				{
						$(this).addClass('oBox');
						gameArray[8] = "o";
						counter++;
            ifWinner();
				}
			}
    }
		});

		$("#resetButton").on("click", function( event ) {
				event.preventDefault();
				counter = 0;
				gameArray = ["","","","","","","","","",];
        winnerBool = true;
				// $("#divOne").removeClass();
				$("div").removeClass();
      });

    });
