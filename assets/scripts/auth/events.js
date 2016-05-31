'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = function (event){
  event.preventDefault();
  let data = getFormFields(event.target);
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
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};


// const onChangePassword = function (event) {
//   event.preventDefault();
// //we pass data as in the form of the new function
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//   .done(ui.success)
//   .fail(ui.failure);
// };
//
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp);
//   $('#sign-in').on('submit', onSignIn);
//   $('#sign-out').on('submit', onSignOut);
//   $('#change-password').on('submit', onChangePassword);
//
// };
  // function (event) {
  //   let data = getFormFields(this);
  //   event.preventDefault();
  //   authApi.signUp(authUi.success, authUi.failure, data);
  // });


module.exports = {
  addHandlers,
};
