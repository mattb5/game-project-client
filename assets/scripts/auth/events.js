
'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event){
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event){
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log("this is data: ");
  console.log(data);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};


const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .done()
  .fail();
};

const onChangePassword = function(event){
  event.preventDefault();
  console.log("this is event" );
  console.log(event);

  let data = getFormFields(event.target);
  console.log(data);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onCreateGame = function(event)
{
  event.preventDefault();
  api.createGame()
  .done(ui.successCreateGame)
  .fail(ui.failure);
};

const onGetGames = function(event)
{
  event.preventDefault();
  api.getGames()
  .done(ui.successGetGames)
  .fail(ui.failure);
};

const onGetGameById = function(event)
{
  event.preventDefault();
  let gameId = $('#getGameByIdText').val();
  console.log(gameId);
  api.getGameById(gameId)
  .done(ui.successGetGames)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-game').on('submit', onCreateGame);
  $('#get-games').on('submit', onGetGames);
  $('#get-game-by-id').on('submit', onGetGameById);
};



module.exports = {
  addHandlers,
};
