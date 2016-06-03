Link to my deployed TicTacToe app:


Technologies used in this project include a the following programming language: HTML, CSS, Javascript and Jquery technologies.  The site also made AJAX requests and interacted with a server.

View this link for wireframes:

--imgur links to pictures from my notebook.
Four user stories include:

As a player, I want this game to work so that I can rely on a self-esteem boost from beating my opponent.
As a player, I want simplicity in interaction with the webApp.  I want to immediately be able to sign-in and start playing.  I do not want to have to jump through hurdles to start playing my favorite game, Tic Tac Toe.
As a player, I want to access my game history so that I can visualize how "on" my TicTacToe game is.
As a player,  want to be able to change my password so that my sneaky, kid brother doesn't ruin my perfect record of wins in TICTACTOE

My planning for this project included first getting the game itself to work and THEN to add to it capability to connect to the server to allow a user a log to keep track of his own games.

Initially, I knew that there would be HTML and CSS needed in order to visually create a Tic Tac Toe gameboard for my user.  I set out to build that first.

From there, I next needed to incorporate jQuery logic and coding into my game so that when a user made his move on the gameboard (clicking for an x or o), the board would populate with that X or O.

Next I needed to use javascript (and more jQuery) logic to ensure taht when a user clicked a box, alternate clicks would mark the game as X and then O and then X and then O...  Also, I hard-coded logic in the game to ensure that should a box be clicked twice, the box will not be changed from X to O.

From there, I used more logic to check for a game Winner and game tie. I did this by running functions to check for both of those game results post every time a user made a move.

Next I started to work on the USER and GAME API's.

Luckily, the user api was very similar to a past project we had done in class.  I effectively, imported that code to get me started for my Sign-up, sign-in, and log out options.

Next I created AJAX requests that would talk to the server about game history for the user.
