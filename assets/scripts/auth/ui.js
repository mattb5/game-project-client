'use strict';

const app = require('../app.js');
//the data below is the password
const success = (data) => {
if(data)
 {
  console.log(data);
 }
 else
 {
  console.log("Changed password successfully");
 }
};

// const successCreateGame = (data) => {
// if(data)
//  {
//   console.log(data);
//  }
//  else
//  {
//   console.log("Created a game");
//  }
// };

const successGetGames = (data) => {
if(data)
 {
  console.log(data);
 }
 else
 {
  console.log("Got Games!");
 }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function (data){
app.user = data.user;
console.log(data);
};

const signOutSuccess = function (){
  app.user = null;
  console.log(app);
};

const successCreateGame = function (data){
console.log("this is data");
console.log(data);
// let gameID = data.game.id;
app.game = data.game;
// console.log(gameID);
console.log(app.game.id);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  successCreateGame,
  successGetGames,
};
