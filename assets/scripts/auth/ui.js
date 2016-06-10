'use strict';

const app = require('../app.js');
//the data below is the password
const success = (data) => {
if(data)
 {
  // console.log(data);
 }
 else
 {
  // console.log("Changed password successfully");
 }
};


const successGetGames = (data) => {
  app.games = data.games;
  $("#GET-to-site").text("Thus far, the player has played " + app.games.length + " games.");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function (data){
app.user = data.user;
// console.log(data);
};

const signOutSuccess = function (){
  app.user = null;
  // console.log(app);
};

const successCreateGame = function (data){
// console.log("this is data");
// console.log(data);
app.game = data.game;
// console.log(gameID);
// console.log(app.game.id);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  successCreateGame,
  successGetGames,
};
