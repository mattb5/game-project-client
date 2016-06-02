'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return $.ajax (
  {
  url: app.host + '/sign-up',
  method: 'POST',
  data: data
  }
);
};

//line 9 and line 17 are doing the same thing, when we use single line

const signIn = (signInData) => {
  return $.ajax ({
    url: app.host + '/sign-in',
    method: 'POST',
    data: signInData
  });
};

const signOut = function (){
    return $.ajax ({
      url: app.host + '/sign-out/' + app.user.id,
      method: 'DELETE',
      headers: {
        Authorization: "Token token=" + app.user.token,
      },
    });
};

const changePassword = function (data) {
  return $.ajax(
    {
      url: app.host + '/change-password/' + app.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data
    });
  };


const newGame = function (data){
  return $.ajax({
    url: app.host + '/games#create',
    method : 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};


// const sendArray = function (data){
//   return $.ajax ({
//     url: app.host + '/sign-in',
//     method: 'POST',
//     data: signInData
//   });
// }

// const changePassword = function (data) {
//   return $.ajax ({
//     url: app.host + '/changePassword/' + app.user.id,
//     method: "PATCH",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data
//   });
// };

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
};
